var users = [;
var team1 = [];
var team2 = [];
var words = [];
var N = 2;
var i = 0;
var j = 0;
var k = 0;
var curTeam = 'red';

function next(idName)
{
    var elem = document.getElementById(idName);
    elem.style.display = "none";
    elem.nextElementSibling.style.display = 'block';
    // alert(elem.nextElementSibling)
}

login(); 

function login(){
    username = document.getElementById("name").value;
    if (! users.includes(username)){
        users.push(username);
        return next('login');
    }
    else{
        return next('teams');
    }
}

function team(n){
    if (n == 1){
        team1.push(username);
    }
    else if (n == 2){
        team2.push(username);
    }
    return next('teams');
}

function addWord(){
    word = document.getElementById("word").value;
    if (word != ''){
        if (words.length < N){
            if (! words.includes(word)){
                words.push(word);
            }
            else{
                alert('Word is already in.');
            }
            document.getElementById("ok").innerHTML = word + ' has been added';
            document.getElementById("word").value = "";
            // document.getElementById(idName);
            // $("#words").load(window.location.href + " #words" );
        }
        else{
            alert('Words list is already full.');
            return next('words');
        }
    }
}

function nextWord(){
    var curWord = document.getElementById('turnOf');
    curWord.innerHTML = words[i]
    i += 1;
}

user = 'Pedro'

function nextPerson(){
    var elem = document.getElementById('round');
    elem.style.display = "none";
    nextSib = elem.nextElementSibling;
    nextSib.style.display = 'block';
    if (curTeam == 'red'){
        curTeam = 'green';
        w = nextWord();
        curPlayer = team1[j];
        j += 1;
        if (curPlayer == user){
            getElementById('nameLabel').innerHTML = 'Es tu turno!!';
            getElementById('turnOf').innerHTML = w;
        }
        else{
            getElementById('turnOf').innerHTML = curPlayer;
        }
    }
    else{
        curTeam = 'red';
        w = nextWord();
        curPlayer = team2[k];
        k += 1;
        if (curPlayer == user){
            getElementById('nameLabel').innerHTML = 'Es tu turno!!';
            getElementById('turnOf').innerHTML = w;
        }
        else{
            getElementById('turnOf').innerHTML = curPlayer;
        }
    }
}