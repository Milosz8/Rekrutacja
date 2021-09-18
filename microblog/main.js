let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodos;
let deleteBtn;

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

let upv=false;
let dv=false;



const main = () => {

    prepareDOMElements();
    prepareDOMEvents();
    
}

const prepareDOMElements = () => {

    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    
    popup = document.querySelector('.popup');
    popupCloseBtn = document.querySelector('.cancel');
    popupInfo = document.querySelector('.popup-info');
   
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    deleteBtn = document.querySelector('.delete');

    upVoteSpan = document.querySelector('.up-vote');
    downVoteSpan = document.querySelector('.down-vote');
    

  

}


const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click',closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    deleteBtn.addEventListener('click',deleteTodoText);
    todoInput.addEventListener('keyup',enterKeyCheck);
    

}

const addNewTodo =()=>{
    
    if(todoInput.value!=='')
    {
        
        newTodos = document.createElement('li');
        newTodos.className ='test1';
        newTodos.textContent = todoInput.value;
        console.log(newTodos);
        ulList.append(newTodos);
        createToolsArea();
        todoInput.value = '';
        errorInfo.textContent = '';
        alert("post added!");
        
    }else{
        errorInfo.textContent = 'you forgot to write sth ;)';

    }

}

const createToolsArea = () => {
    

    //edit create...
    var div = document.createElement('div');
    div.classList.add('tools');
    newTodos.append(div);
    var btnEdit = document.createElement('button');
    btnEdit.classList.add('edit');
    btnEdit.innerHTML='EDIT'

    var btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.innerHTML='<i class="fas fa-times"></i>';

    div.append(btnEdit,btnDelete);
    //scoring
    var div = document.createElement('div');
    div.classList.add('vote');
    newTodos.append(div);
    var spanUp = document.createElement('span');
    spanUp.classList.add('up-vote');
    spanUp.innerHTML='<i class="fas fa-angle-up"></i>';
    var score = document.createElement('span');
    score.classList.add('number');
    score.innerHTML='0';
    var spanDown = document.createElement('span');
    spanDown.classList.add('down-vote');
    spanDown.innerHTML='<i class="fas fa-angle-down"></i>';
    div.append(spanUp,score,spanDown);
    
    
}

const checkClick = (e) =>{

    
    if(e.target.matches('.edit')){
        editTodo(e);
        
    }else if(e.target.matches('.delete')){
        console.log('delete');
        deleteTodoText(e);
    }else if(e.target.matches('.up-vote')){
        
        scoreUp(e);
        
    }else if(e.target.matches('.down-vote')){
        
        scoreDown(e);
    }
}

const editTodo = e => {

    todoToEdit=e.target.closest('li');
    //console.log(todoToEdit);
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';


}

const closePopup = () =>{

    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const changeTodoText = () => {

    if(popupInput.value !== ''){

        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display='none';
        popupInfo.textContent = '';

    }else{
        popupInfo.textContent='musisz podac jakas tresc!';
    }

}

const deleteTodoText = e => {

        
        e.target.closest('li').remove();
        const allTodos = ulList.querySelectorAll('li');
        if(allTodos.length===0){
            errorInfo.textContent = 'brak zadan na liscie';
        }
}

const enterKeyCheck = e => {

    if(e.key ==='Enter'){

        addNewTodo();

    }


}



const scoreUp = (e) => {
    const closestUp = e.target.closest(".vote").querySelector(".up-vote");
    const closestDown = e.target.closest(".vote").querySelector(".down-vote");
    const score = e.target.closest(".vote").querySelector(".number");

    if(upv == false && dv == false){
    closestUp.style.cssText = "color: lime";
    closestDown.style.cssText = "color: red";
    upv=true;
    dv=false;
    score.innerHTML=parseInt(score.innerHTML)+1;

    }else if(upv == true && dv == false){
        closestUp.style.cssText = "";
        closestDown.style.cssText = "";
        upv=false;
        dv=false;
        score.innerHTML=parseInt(score.innerHTML)-1;


    }else if(upv == false && dv ==true){
        closestUp.style.cssText = "color: lime";
        closestDown.style.cssText = "color: red";
        upv=true;
        dv=false;
        score.innerHTML=parseInt(score.innerHTML)+2;

    }
    
    
    
  };
  
  const scoreDown = (e) => {
    
    console.log("scoredown");
    const closestUp = e.target.closest(".vote").querySelector(".up-vote");
    const closestDown = e.target.closest(".vote").querySelector(".down-vote");
    
    const score = e.target.closest(".vote").querySelector(".number");

    if(dv == false && upv ==false){
        closestDown.style.cssText = "color: lime";
        closestUp.style.cssText = "color: red";
        dv=true;
        upv=false;
        score.innerHTML=parseInt(score.innerHTML)-1;
    
    }else if(dv == true&&upv==false){
            closestUp.style.cssText = "";
            closestDown.style.cssText = "";
            dv=false;
            upv=false;
            score.innerHTML=parseInt(score.innerHTML)+1;

    }else if(dv == false && upv == true){
            closestDown.style.cssText = "color: lime";
            closestUp.style.cssText = "color: red";
            dv= true;
            upv=false;
            score.innerHTML=parseInt(score.innerHTML)-2;

        }
        
  };

//  const up_vote_spans = document.getElementsByClassName('up-vote');
//  const down_vote_spans = document.getElementsByClassName('down-vote');
//  const count = document.getElementsByClassName('number');

// let votes = [];

// for (let i = 0; i < count.length; i += 1) {
//   const thisUpVoteSpan = up_vote_spans[i];
//   const thisDownVoteSpan = down_vote_spans[i];
//   votes[i] = { up: false, down: false };

//   thisUpVoteSpan.addEventListener('click', handleUpvote.bind(null, i), false);
//   thisDownVoteSpan.addEventListener('click', handleDownvote.bind(null, i), false);
// }

// function handleUpvote(i) {
//   const currentVote = votes[i];
//   const matchingUpSpan = up_vote_spans[i];
//   const matchingDownSpan = down_vote_spans[i];
//   const matchingCount = count[i];
//   const currentCount = parseInt(matchingCount.innerHTML);

//   if (currentVote.down) {
//     matchingCount.innerHTML = currentCount + 2;
//   } else if (currentVote.up === false) {
//     matchingCount.innerHTML = currentCount + 1;
//   } else {
//     matchingCount.innerHTML = currentCount - 1;
//   }
//   if (!currentVote.up) {
//     matchingUpSpan.style.color = "#3CBC8D";
//     matchingDownSpan.style.color = 'dimgray';
//     currentVote.up = true;
//     currentVote.down = false;
//   } else {
//     matchingUpSpan.style.color = 'dimgray';
//     currentVote.up = false;
//   }
// }

// function handleDownvote(i) {
//   const currentVote = votes[i];
//   const matchingUpSpan = up_vote_spans[i];
//   const matchingDownSpan = down_vote_spans[i];
//   const matchingCount = count[i];
//   const currentCount = parseInt(matchingCount.innerHTML);

//   if (currentVote.up) {
//     matchingCount.innerHTML = currentCount - 2;
//   } else if (currentVote.down === false) {
//     matchingCount.innerHTML = currentCount - 1;
//   } else {
//     matchingCount.innerHTML = currentCount + 1;
//   }
//   if (!currentVote.down) {
//     matchingDownSpan.style.color = "#3CBC8D";
//     matchingUpSpan.style.color = 'dimgray';
//     currentVote.down = true;
//     currentVote.up = false;
//   } else {
//     matchingDownSpan.style.color = 'dimgray';
//     currentVote.down = false;
//   }
// }

document.addEventListener('DOMContentLoaded', main);



