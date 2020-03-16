function distributeWords(palabras, usuarios){
    const start = Date.now(); 
    palabras.sort(() => Math.random() - 0.5); // Shuffle the words
  
    while ((Date.now() - start) / 1000 < 60) { // For a minute
        // console.log();
        palabra = palabras.pop()

        // Comprobar si han acertado
        if (palabras.length == 0){
            return //"Ya no hay más"
        }
    }
  } 
  