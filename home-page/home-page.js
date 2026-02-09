// Autoplay de la musique au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');
    
    // Essayer de lancer la musique
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log('Musique lancée');
            })
            .catch(error => {
                console.log('Autoplay bloqué. L\'utilisateur doit interagir:', error);
                // Si autoplay est bloqué, jouer au premier clic
                document.addEventListener('click', function playOnClick() {
                    music.play();
                    document.removeEventListener('click', playOnClick);
                });
            });
    }
});





const items = document.querySelectorAll('.autoBlur');
let index = 0;

function smoothScrollTo(element, duration = 2500) {
  const start = window.scrollY;
  const elementHeight = element.offsetHeight;
  const target =
    element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2 - elementHeight / 2);
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = progress * progress * (3 - 2 * progress);
    window.scrollTo(0, start + distance * ease);
    if (progress < 1) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// scroll automatique toutes les 5 secondes
const interval = setInterval(() => {
  // rendre le texte courant visible
  items.forEach(el => el.classList.remove('visible'));
  items[index].classList.add('visible');

  // scroll vers l'élément courant
  smoothScrollTo(items[index], 2500);

  // arrêt automatique sur le dernier
  if (index >= items.length - 1) {
    clearInterval(interval);
  } else {
    index++;
  }
}, 5000);
