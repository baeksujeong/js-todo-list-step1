const Newtodo = document.getElementById("new-todo-title");
const list = document.querySelector(".todo-list");

var write = ""
let test = document.createElement('li');


window.onkeyup = function(e){
    var key = e.keyCode ? e.keyCode:e.which;

    if(key == 13){
        write = Newtodo.value;
    
        list.innerHTML += `<li id="todo" class='false'>
        <div class='view'>
            <input class='toggle' type='checkbox' />
            <label class="label">${write}</label>
            <button class='destroy'></button>
        <div>
        <input class='edit' value='${write}' />
    </li>`
    }

    const checks = document.querySelectorAll('.toggle');
    const text = document.querySelectorAll('.label');
    var count = 0;

    checks.forEach(el => {
        el.addEventListener('click', () => {
            count ++;
            if(count % 2 == 1){
                if(el.parentNode.classList.contains('true') == false){
                    el.parentNode.classList.add('true')
                }
                else{
                    el.parentNode.classList.remove('true')
                }
            }
            else{
                if(el.parentNode.classList.contains('true') == false){
                    el.parentNode.classList.add('true')
                }
                else{
                    el.parentNode.classList.remove('true')
                }
                el.nextElementSibling.classList.remove('true')
            }
        })
    })
    let del = document.querySelectorAll(".destroy")
    del.forEach(el => {
        el.addEventListener('click', () => {
            el.parentNode.parentNode.remove()
        })
    })

    //TODO - 팝업이 아닌 상자에서 바로 수정 가능하도록 구현
    text.forEach(el => {
        el.addEventListener('dblclick', (e) => {
            console.log(e.target.innerText)
            var input = prompt('변경할 text 입력');
            el.innerText = input
        })
    })
    
}

// label에 true 추가
//document.querySelectorAll('.toggle')[1].nextElementSibling.classList.add('true')


// checks[0].addEventListener('click', () => {
//     text[0].style.color = '#c8c8c8';
//     text[0].style.textDecoration = "line-through";
// })


// let qw = document.getElementById('todo');

// if (qw.className === 'false'){
//     qw.className = 'true'
// }else{
//     qw.className = 'test'
// }


// const check = document.querySelector('.toggle');
// const text = document.querySelector('.label');

// check.addEventListener('click', () => {
//     console.log('click');
//     if(qw.className)

// })

