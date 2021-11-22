var content = document.getElementsByTagName('body')[0];
var darkmode = document.getElementById('dark-change');
var lightmode = document.getElementById('light-change');

darkmode.addEventListener('click', function () {
    darkmode.classList.toggle('active');
    content.classList.toggle('night');

})
lightmode.addEventListener('click', function () {
    darkmode.classList.toggle('active');
    content.classList.toggle('night');

})


//Selectors 
const card = document.createElement("li");
const todoList = document.querySelector(".todos");
const todoInput = document.querySelector("#addText");
const todoButton = document.querySelector("#addBtn");
const filterOption = document.querySelector(".filter-todo")


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
 filterOption.addEventListener('click', filterTodo);

//Functions





function addTodo(event) {
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); 
   //Check Mark BUTTON
    const completeButton = document.createElement('button');
    // completeButton.innerHTML = '<i class="fas fa-check"><i/>';
    completeButton.innerHTML = ' <img class="fa-check"  src="images/icon-check.svg" alt="">';
    
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Check Trash BUTTON
    const trashButton = document.createElement('button');
    // trashButton.innerHTML = '<i class="fas fa-times"></i>';
    trashButton.innerHTML = ' <img class="fa-times"  src="images/icon-cross.svg" alt="">';

    trashButton.classList.add("times-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value= "";
}

function deleteCheck(e) {
   
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "times-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend' ,function(){
            todo.remove();
        });
        // todo.remove();
    }
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
         todo.classList.toggle("completed");
   

    }
    }

    function filterTodo(e){
       const todos = todoList.childNodes;
       
       todos.forEach(function(todo) {
       switch (e.target.value) {
           case "all":
               todo.style.display = "flex";
               break;
               case "active":
                   if (!todo.classList.contains("completed")) {
                      todo.style.display = "flex";
                   } else {
                       todo.style.display = "none";
                   } 
                   break;
                   case "completed":
                    if (todo.classList.contains("completed")) {
                       todo.style.display = "flex";
                    } else { 
                        todo.style.display = "none";
                    }
                    break;
                  
       }
       });
   
    };






// *******************************************************

//   document.querySelector(".todos").addEventListener("dragover", function (e) {
//       e.preventDefault();
//       if(
//           !e.target.classList.contains("dragging") && 
//           e.target.classList.contains("card")
//       ) {
//           const draggingCard = document.querySelector(".dragging");
//           const cards = [...this.querySelectorAll(".card")];
//           const currPos = cards.indexOf(draggingCard);
//           const newPos = cards.indexOf(e.target);
//           console.log(currPos, newPos);
//           if (currPos > newPos) {
//               this.insertBefore(draggingCard, e.target);
//           } else{
//             this.insertBefore(draggingCard, e.target.nextSibling);
//           }
//           const todos = JSON.parse(localStorage.getItem("todos"));
//           const removed = todos.splice(currPos, 1);
//           todos.splice(newPos, 0, removed[0]);
//           localStorage.setItem("todos",JSON.stringify(todos));
//       }
//   });


  // document
  //   .getElementById("clear-completed")
  //   .addEventListener("click", function () {
  //     deleteIndexes = [];
  //     document.querySelectorAll(".card.checked").forEach(function (card) {
  //       deleteIndexes.push(
  //         [...document.querySelectorAll(".todos .card")].indexOf(card)
  //       );
  //       card.classList.add("fall");
  //       card.addEventListener("animationend", function (e) {
  //         setTimeout(function () {
  //           card.remove();
  //         }, 100);
  //       });
  //     });
  //     removeManyTodo(deleteIndexes);
  //   });



//    new Sortable(todoList, {
//        animation: 300
//    });











// function deleteCheck(e) {
// const item = e.target;
// //DELETE TODO
// if (item.classList[0] === "times-btn") {
//     const todo = item.parentElement;
//     todo.remove();
// }
// if (item.classList[0]=== "complete-btn"){
//     const todo = item.parentElement;
//     todo.classList.toggle("complated");
// }
// }