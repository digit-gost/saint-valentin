const btnNo = document.querySelector('.btn-no');
const btnYes = document.querySelector('.btn-yes');
const messages = [
    'NON',
    'Es-tu sûr(e) ?',
    'Vraiment sûr(e) ?',
    'Réfléchis bien...',
    'Dernière chance !',
    'Allez, dis oui ! 💕'
];

let messageIndex = 0;

btnNo.addEventListener('click', function() {
    messageIndex = (messageIndex + 1) % messages.length;
    btnNo.textContent = messages[messageIndex];
});

btnYes.addEventListener('click', function() {
    alert("🎉🥰 Oui ! Tu rends ma journée !\nMaintenant je t'ai écrit un petit poême avec un son ambiant. Si tu arrive sur la page appuis sur le titre du poême pour activer l'animation et laisse laisse la magie s'opérer😉\nJe t'aime♥️ ");
});