const linksSocialMedia = {
  github: "emagoediv",
  youtube: "channel/UCPNbYku2TRyO4LfkrRiiagg",
  facebook: "matheus.amorim.165685",
  instagram: "matheussuehtam0",
  twitter: ""
}

function  changeSocialMediaLinks() {
  //children pega os filhos
  for(let li of socialLiks.children ){
  //variavel de escopo
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}


changeSocialMediaLinks()



function getGitHubProfileInfos(){
  //template string
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //fetch pega algum retorno ou resposta, pega o conteudo
  //then = promisse   PROMESSA DE PEGAR ALGUMA COISA  verifica se deu certo de pegar-> se deu certo faça
  fetch(url)
  .then(response => response.json())
  .then(data =>{
  userName.textContent = data.name
  userBio.textContent = data.bio  
  userLink.href = data.html_url
  userImage.src = data.avatar_url
  userlogin.textContent = data.login
  })
}



getGitHubProfileInfos()