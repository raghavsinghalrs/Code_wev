var add = document.getElementById('addforms');
var item_list = document.getElementById('lists');
var filter = document.getElementById('filter');

add.addEventListener('submit', appenditem);
item_list.addEventListener('click',removeitem);
filter.addEventListener('keyup',filteritem);
function removeitem(x){
    if(x.target.id==='del'){
        if(confirm('Are you sure?')){
            var li = x.target.parentElement;
            item_list.removeChild(li);
        }
    }
}
    
function appenditem(e){
    e.preventDefault();
    var value = document.getElementById('tasks').value;
    var li = document.createElement('li');
    li.id = 'task';
    var input = document.createElement("input");
    input.type = 'text';
    input.value=value;
    li.appendChild(input);
    var del = document.createElement('button');
    del.id='del';
    del.textContent='del'
    li.appendChild(del);
    item_list.appendChild(li);
}

function filteritem(e){
    var text = e.target.value
}