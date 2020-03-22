var reds = ['Pedro', 'Kotic', 'Rubio', 'Julia', 'Marta'];
var greens = ['Babu', 'Irene', 'Maroto', 'Muzu'];
var words = ['alcachofa', 'tablero', 'teclado', 'zanahoria', 'horquilla', 'meretriz', 'alcahueta', 'serpiente', 'arbol', 'libro'];
var rounds = ['descripciones', 'una palabra', 'gestos'];

var N = 10; //max number of words

var r = 0;
var g = 0;

var turn = Math.round(Math.random);

for (i = 0; i < 3; i++){
    var round = rounds[i];
    console.log('----------' + round);
    // var wordsCopy = words.sort(() => Math.random() - 0.5); // Shuffle the words
    var wordsCopy = words.slice();

    while (wordsCopy.length > 0){
        console.log(turn);
        if (turn == 0){
            var team = reds;
            k = r;
        }
        else{
            var team = greens;
            k = g;
        }

        if (k >= team.length){
            k = 0;
        }
        var player = team[k];
        k += 1;
        console.log(player + "'s turn!");

        wordsCopy.sort(() => Math.random() - 0.5); // Shuffle the words
        var j = 0;

        const start = Date.now(); 
        while ((Date.now() - start) / 1000 < 1) { // For a minute
            if (j < wordsCopy.length){
                var word = wordsCopy[j];
                j += 1;
                var currentTime = new Date().getTime();
                while (currentTime + 600 >= new Date().getTime()) {
                }
                wordsCopy.splice(j, 1);
                console.log(word, wordsCopy);
            }
            else{
                console.log('You run out of words!');
                var state = true;
                break;
            }
        }
        if (state == true){
            console.log("You've finished!");
            break;
        }
        console.log("Time's out! next turn");
        if (turn == 0){
            r = k;
            turn = 1;
        }
        else{
            g = k;
            turn = 0;
        }
    }
}
