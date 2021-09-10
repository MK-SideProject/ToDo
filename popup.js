const toDoForm = document.querySelector('.input');
let items = document.querySelector('.list');
let itemPlus = document.getElementById('.todo_add');
let reset = document.querySelector('.reset')
const toDoInput = toDoForm.querySelector("input");


document.querySelector('ul').addEventListener('click',checkToDo);
reset.addEventListener('click', resetToDo);
toDoForm.addEventListener("submit", handleSubmit);



const TODOS_Ls = "toDos";
let toDos = [];
loadToDos();

function add (text){


    let itemElement = document.createElement('li'); //태그
    itemElement.classList.add('item');

    
    let checkTag = document.createElement('input');
    checkTag.setAttribute('type','checkbox');
    checkTag.classList.add('item--check');

    const span = document.createElement('span'); // span 태그생성
    span.style.margin = 10+"px";
    const newId = toDos.length + 1;

    let removeTag = document.createElement('button');
    removeTag.classList.add('list--remove');
    const x = document.createTextNode("X");
    span.innerText = text;
    removeTag.appendChild(x);
    itemElement.appendChild(checkTag);
    itemElement.appendChild(span);
    itemElement.appendChild(removeTag);
    itemElement.id= newId;
    items.appendChild(itemElement);
  
    removeTag.addEventListener('click', deleteToDo);

   const toDoObj = { // toDos 배열안에 넣을 정보를 setup 
        text,
        id: newId
    };

    
    toDos.push(toDoObj);
    saveToDos()

   
    }

function handleSubmit(e) {
    e.preventDefault(); // 이벤트가 작동하지 못하게 함
    const currentValue = toDoInput.value; // currentValue에 input창에 입력한 값 대입
    add(currentValue); // 리스트 추가하는 함수
    toDoInput.value = ""; // input창 초기화
    toDoInput.focus();
  }



function saveToDos(){
    localStorage.setItem(TODOS_Ls, JSON.stringify(toDos));
}




function deleteToDo(e){
    const btn = e.target;
    let li = btn.parentElement;
    items.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
       return toDo.id !==parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function resetToDo(e){
    items.innerHTML='';
    toDos = [];
    saveToDos();

}

function checkToDo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
        todo.style.textDecoration = "line-through";

    }else{
        todo.style.color = "#000000";
        todo.style.textDecoration = "none"
    }
   saveToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_Ls);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // loadedToDos를 json객체로 변경
        parsedToDos.forEach(function (toDo) { // 객체 내용 한개씩 파라미터로 넣어서 함수 실행
          add(toDo.text); // 리스트 추가하는 함수
        });
      }

}


window.addEventListener('keydown',e=>{
    if(e.keyCode !== 13) {
        e.stopPropagation();
        //saveToDos();
        return;
    }
    //itemPlus.click();

})