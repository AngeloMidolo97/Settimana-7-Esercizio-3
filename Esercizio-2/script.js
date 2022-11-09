var loginBtn = document.getElementById('log');
var deleteBtn = document.getElementById('delete');

loginBtn.addEventListener('click', ()=>{
    var user = document.getElementById('login').value;
    if(!user){
        return document.getElementById('ciao').innerHTML = `No data`;
    }
    localStorage.setItem("usr", user);
    document.getElementById('ciao').innerHTML = `Ciao, ${user}`;
    document.getElementById('login').value = '';
})

deleteBtn.addEventListener('click', ()=> {
    localStorage.clear();
    document.getElementById('ciao').innerHTML = ``;
})