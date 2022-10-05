   
function createText(){
let ul = document.createElement('ul');
    document.body.append(ul);

let li = document.createElement('li');
    li = document.getElementById("info").value;
    
    ul.append(li);
}