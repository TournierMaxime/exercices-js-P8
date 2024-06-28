const addFormLabels = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        const label = document.createElement('label');
        label.setAttribute('for', input.id);
        
        if (input.id === 'name') {
            label.textContent = 'Nom :';
        } else if (input.id === 'email') {
            label.textContent = 'Adresse e-mail :';
        }
        
        input.parentNode.insertBefore(label, input);
    });
}

const addImageAlt = () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        if (!image.hasAttribute('alt')) {
            image.setAttribute('alt', 'Description de l\'image');
        }
    });
}

const addLinkTitles = () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (!link.hasAttribute('title')) {
            link.setAttribute('title', 'Lien vers une action spécifique');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addFormLabels();
    addImageAlt();
    addLinkTitles();
});
