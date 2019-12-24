class App {
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
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
    console.log(this.repositories);
  }
}

new App();