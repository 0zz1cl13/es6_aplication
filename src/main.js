import api from './api';

class App {
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEL = document.querySelector("input[name='repository']");
    this.registerHandlers();
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(isLoading = true){
    if (isLoading){
      let loadingEl = document.createElement('span');
      loadingEl.setAttribute('id', 'loading');
      loadingEl.appendChild(document.createTextNode('Carregando...'));
      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event){
    event.preventDefault();

    const input = this.inputEL.value;

    if (input.lengh === 0){
      alert('Campo repositório vazio!');
      return ;
    }
    
    this.setLoading();

    try {
      const response = await api.get(`/repos/${input}`);
      const { name, description, html_url, owner : { avatar_url }} = response.data;
      this.repositories.push({
          name,
          description,
          avatar_url,
          html_url    
      });
      this.inputEL.value = '';
      this.render();
    }catch (e){
      alert('Não foi possível encontrar o repositório!');
      console.log(e);
    }
    
    this.setLoading(false);
  }

  render(){
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);
      
      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let liEl = document.createElement('li');
      liEl.appendChild(imgEl);
      liEl.appendChild(titleEl);
      liEl.appendChild(descriptionEl);
      liEl.appendChild(linkEl);
      

      this.listEl.appendChild(liEl);
    });
  }
}
 
const MyApp = new App();