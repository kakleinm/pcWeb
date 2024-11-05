console.log('Hello');
console.log('What?');

let username;

document.getElementById('sB').onclick = function() {
    username = document.getElementById('iP').value;
    document.getElementById('myH1').textContent = `hello, ${username}`;
    document.getElementById("ib").textContent = "increase";
    document.getElementById("rb").textContent = "reset";
    document.getElementById("db").textContent = "decrease";
    document.getElementById("iCount").textContent = 0;
    const ib = document.getElementById("ib");
    const db = document.getElementById("db");
    const rb = document.getElementById("rb");
    const iCount = document.getElementById("iCount");

    let count = 0;

    ib.onclick = function(){
        count++;
        iCount.textContent = count;
    }
    db.onclick = function(){
        count--;
        iCount.textContent = count;
    }
    rb.onclick = function(){
        count = 0;
        iCountLabel.textContent = count;
    }
}