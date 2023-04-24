function openNav(){
    document.getElementById("myNav").style.width = '100%'
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%'
}

window.onload = function capi() {
    const music = new Audio('capi.mp3')
    music.play();
    music.loop =true;
}