const message = () => {
    const p = document.createElement('p');
    p.innerText = "Bonjour, vous avez cliqué sur le bouton !";

    const button = document.getElementById('myButton');
    button.insertAdjacentElement('afterend', p);
}

document.addEventListener("click", message);
