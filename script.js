//  <div class="todo_kotet">
/* <div class="check">
</div>
<div class="todo_item">
    cut the lawn
</div>
<div class="delete_item">
    <button>Delete</button>
</div>
</div>  */


function add_item(event){
    event.preventDefault();
    // get input value 
    let text = document.getElementById("add_items").value;

    // check if input is empty
    if(text.trim()==="") return;

    // create todo_kotet div class list 

    let todo_kotet = document.createElement('div');
    todo_kotet.classList.add('todo_kotet');

    let check = document.createElement('div');
    check.classList.add('check');

    let todo_item = document.createElement('div');
    todo_item.classList.add('todo_item');
    todo_item.textContent = text;

    let delete_item = document.createElement('div');
    delete_item.classList.add("delete_item");

    let del_btn = document.createElement('button');
    del_btn.textContent = "Delete";
    delete_item.appendChild(del_btn)

    // append all created to parent element 
    todo_kotet.appendChild(check);
    todo_kotet.appendChild(todo_item);
    todo_kotet.appendChild(delete_item);

    let wrapper = document.querySelector('.task_wrapper');


    wrapper.appendChild(todo_kotet);
    document.getElementById('add_items').value = " ";

    del_btn.addEventListener('click',() =>{
        todo_kotet.remove();
    })

}

// delete items 


