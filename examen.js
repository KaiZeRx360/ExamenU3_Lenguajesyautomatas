const esPalindromo = (texto) => {
    texto = texto.toLowerCase();
    let izquierda = 0, derecha = texto.length - 1;

    while (izquierda < derecha) {
        
        while (izquierda < derecha && !/[a-z0-9]/.test(texto[izquierda])) izquierda++;
        
        while (izquierda < derecha && !/[a-z0-9]/.test(texto[derecha])) derecha--;

        
        if (texto[izquierda] !== texto[derecha]) return false;

        izquierda++;
        derecha--;
    }
    return true; 
}

const resultado = esPalindromo("Anita lava la tina") ? "Es un palíndromo" : "No es un palíndromo";
console.log(resultado);
