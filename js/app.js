// Initialise Variables

const input = document.querySelector(".entry #input");
const add = document.querySelector(".entry #submit");
const filter = document.querySelector(".filter #input");
const clear = document.querySelector(".activity a");
const list= document.querySelector(".collection");


// Adding The Input To The List

add.addEventListener("click",addtask);

function addtask(e){
  if(input.value === ''){
    alert("Please Add A Task");
  }else{
    // Creating li
    const li = document.createElement("li");
    li.className="text";
    li.textContent=input.value;

    //Creating the icon
    const i =document.createElement("i");
    i.className="fas fa-trash-alt";

    //Creating the checkbox
    const check=document.createElement("input");
    check.type="checkbox";
    check.id="checkbox"

    //Creating collection
    const collection =document.createElement("div");
    collection.className="collection-item";
    collection.appendChild(li);
    collection.appendChild(i);
    collection.appendChild(check);

    //Appending to main collection
    list.appendChild(collection);

    //Clearing the input field
    input.value = "";

  }
  e.preventDefault();
}


//Deleting Entry From The List
const del=document.querySelector('.collection');
del.addEventListener("click",removetask);

function removetask(e){
  if(e.target.className === "fas fa-trash-alt"){
    if(confirm("Are you sure")){
      e.target.parentElement.remove();
    }else{
    }
  }
};

//Clearing all list elements

clear.addEventListener("click",clearall);

// function clearall(){
//   const lis=document.querySelectorAll(".collection-item");
//   lis.forEach(function(item){
//     item.remove();
//   });
// }

const nil=document.querySelector('.collection');

function clearall(){
  if(confirm("Are you sure to remove all")){
  while(nil.firstChild){
    nil.firstChild.remove();
  }
  }
};

// Task completed indication
const check =document.querySelector('.collection');

check.addEventListener('change',checked);

function checked(e){
  if(e.target.id === 'checkbox'){
    if(e.target.checked){
      e.target.parentElement.style.background="green";
      e.target.parentElement.style.color="white";  
    }else{
      e.target.parentElement.style.background="#f4f4f4";
      e.target.parentElement.style.color="#333";
    }
  }
}

