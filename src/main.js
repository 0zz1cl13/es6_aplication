class App {
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event){
    event.preventDefault();

    this.repositories.push({
        name: 'rocketeseat.com.br',
        description: 'Tire a sua ideia do papel e dê vida a sua startup.',
        avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        html_url: 'http://github.com/rocketseat/comunidade'
    });    
    this.render();
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