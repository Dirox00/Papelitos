var users = ['hola'];
var team1 = [];
var team2 = [];
var words = [];
var N = 1;

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
    if (word.value != ''){
        if (words.length < N){
            word = document.getElementById("word").value;
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
