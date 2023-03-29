var username = document.getElementById('name');
var email = document.getElementById('email');
var pwd = document.getElementById('pwd');
var press = document.getElementById('submit');
var list = document.getElementById('output_screen');

press.addEventListener('click',show_details);
list.addEventListener('click',delete_details);
function show_details(e){
    e.preventDefault();
    var li = document.createElement('li');
    li.id = 'details';
    li.appendChild(document.createTextNode(username.value));
    li.appendChild(document.createTextNode(email.value));
    li.appendChild(document.createTextNode(pwd.value));
    li.ch
    var delq = document.createElement('button');
    delq.id='del';
    delq.textContent='del'
    li.appendChild(delq);
    list.appendChild(li);
    result = {
        'name':username.value,
        'email':email.value,
        'password':pwd.value
    };
    var object = JSON.stringify(result);
    localStorage.setItem(email.value,object);
}
function delete_details(e){
    if (e.target.id=='del'){
        if(confirm('Are you sure?')){
            var x = e.target.parentElement;
            list.removeChild(x);
            var item = x.childNodes[1];
            localStorage.removeItem(item.textContent);
        }
    }
}