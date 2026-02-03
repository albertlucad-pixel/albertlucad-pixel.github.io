// Gallery modal functionality
let galleries = [
    ['../images/exemple général/exemple général - SET.png', '../images/exemple général/exemple général2 - SET.png', '../images/exemple général/exemple général3 - SET.png'],
    ['../images/Autotask - IA Qualification V1/workflow V1.png'],
    ['../images/Autotask - IA Qualification V2/AA - workflow V2 complet.png', '../images/Autotask - IA Qualification V2/AB - partie filtre.png', '../images/Autotask - IA Qualification V2/AC - récupe de donnée.png', '../images/Autotask - IA Qualification V2/AD - filtre du ticket.png', '../images/Autotask - IA Qualification V2/AE - Création et modification ticket.png'],
    ['../images/node IA/Autotask trigger.png', '../images/node IA/Autotask trigger1.png', '../images/node IA/Get contact sans filtre.png', '../images/node IA/Get contact.png', '../images/node IA/Get contact1.png'],
    ['../images/rapport licence/AA - workflow complet.png', '../images/rapport licence/AB - partie Arrow.png', '../images/rapport licence/AC - partie Autotask.png', '../images/rapport licence/AD - partie prévision météo.png', '../images/rapport licence/AE - partie sauvegarde github.png', '../images/rapport licence/github.png']
];
let currentGallery = 0;
let currentIndex = 0;

function openModal(galleryIndex, index) {
    currentGallery = galleryIndex;
    currentIndex = index;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-img').src = galleries[currentGallery][currentIndex];
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = galleries[currentGallery].length - 1;
    if (currentIndex >= galleries[currentGallery].length) currentIndex = 0;
    document.getElementById('modal-img').src = galleries[currentGallery][currentIndex];
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}