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
    alert('🎉 Oui ! Tu rends ma journée !');
});
