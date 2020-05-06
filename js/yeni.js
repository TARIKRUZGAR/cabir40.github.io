// JavaScript Document

$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".sidebar-left").toggle();      
        
    })
})

// sidebar-right sağ ödev listesi

const form=document.querySelector('#addTaskForm');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addNewItem);

    taskList.addEventListener('click',deleteItem);

    btnDeleteAll.addEventListener('click',deleteAllItems)

}

function deleteAllItems(){

    if (confirm('hepsinin silmek istediğinizden emin misiniz?') ) {
        taskList.innerHTML='';
        // taskList.childNodes.forEach(function(item){
        //     if(item.nodeType===1){
        //         item.remove();
        //     }
        // }); 
        e.preventDefault();
    }
   
}

function deleteItem(e){
    

    
    if(e.target.className==='fas fa-times'){
        if(confirm('ödevi silmek stediğinizden emin misiniz?')){
        e.target.parentElement.parentElement.remove();
        console.log(e.target);

    }
}
    e.preventDefault();

}



function addNewItem(e){
    if(input.value===''){
        alert('yeni ödev eklemediniz');
    }else{

    const li= document.createElement('li');
    li.className="list-group-item list-group-item-dark"

    li.appendChild(document.createTextNode(input.value))

    const a=document.createElement('a');
    a.className ='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML=' <i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li)

    input.value='';
}

    e.preventDefault();
}
