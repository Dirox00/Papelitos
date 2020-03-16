users = ['hola'];
team1 = []
team2 = []

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
    }
    return next('login');
}

function team(n){
    alert(username)
    if (n == 1){
        team1.push(username);
    }
    else if (n == 2){
        team2.push(username);
    }
}