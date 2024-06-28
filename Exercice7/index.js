const convertToBinary = () => {
    const decimalInput = document.getElementById('decimalInput').value;
    
    // Verfie si la valeur contient uniquement des chiffres
    if (!/^\d+$/.test(decimalInput)) {
        document.getElementById('binaryResult').textContent = "";
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);
    const binaryResult = decimalNumber.toString(2);

    document.getElementById('binaryResult').textContent = `Représentation binaire : ${binaryResult}`;
}
