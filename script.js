const buttonNo = document.querySelector('#No');
const buttonYes = document.querySelector('#Yes');

let fontSize = 2;
let messageIndex = 0;

let message = [
    'Segura? Intenta otra vez',
    'Falso, si quieres serlo',
    'Bueno, presiona otra vez',
    'Le vas a romper el corazón a nuestros pingüinos? 😢​',
    'La señora Mónica diría que aceptes, no se ah 🤝​',
    'Te doy otra oportunidad',
    'De nada sirve decir no 😘​',
    'No te lo digo en persona porque está en Ayacucho puem',
    'Aprendí a programar esto para decirte ah, resolviendo',
    'Vamos naqui, acepta'
];

buttonNo.addEventListener('click', () => {
    fontSize += 0.5;
    buttonYes.style.fontSize = `${fontSize}rem`;

    buttonNo.textContent = message[messageIndex];
    
    messageIndex++;
    
    if (messageIndex >= message.length) {
        messageIndex = 0;
    }
});

buttonYes.addEventListener('click', ()=> {
   document.querySelector('#message').style.display = 'flex'
});
