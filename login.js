function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "menu.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}

window.onload = function capi() {
    const music = new Audio('capi.mp3')
    music.play();
    music.loop =true;
}
