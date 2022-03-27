var estadoLicuadora = "off";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById('blender-button-sound');


function controlarLicuadora(){
    if(estadoLicuadora == 'off'){
        estadoLicuadora = 'on';
        sonidoLicuadoraa();
        licuadora.classList.add('active')
       
    } else {
        estadoLicuadora == 'off'
        sonidoLicuadoraa();
        licuadora.classList.remove('active');
    }
}

function sonidoLicuadoraa(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
