const divCam = document.getElementById('camera');

const divSnap = document.getElementById('snapshot');



//camera
Webcam.set({
    width: 350,
    height: 300,
    imageFormat: 'png',
    pngQuality: 90

})
//permissão
Webcam.attach(divCam);

Webcam.snap(dataURI => {
    const ibagem = document.createElement("img");
    ibagem.id = "captura";
    ibagem.src = dataURI;
    //colocar dentro do html
    divSnap.innerHTML = "";
    divSnap.appendChild(ibagem);
    //speak("triste", "feliz");
  
});
