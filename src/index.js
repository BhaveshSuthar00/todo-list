import ("./index.css");
import Icon from "./todo.jpg";
let form = document.getElementById('form');
let arr = JSON.parse(localStorage.getItem('listItems')) || [];
let img = document.getElementById('img_container');
img.src = Icon;
let maindiv = document.getElementById('output_div');
displayTable(arr);
form.addEventListener('submit',(event) => {
    let text = document.getElementById('task').value;
    let obj = {
        
        task : text
    }
    arr.push(obj);
    localStorage.setItem('listItems', JSON.stringify(arr))
    displayTable(arr);
})
function displayTable(arr){
    maindiv.innerHTML = null;
    arr.forEach(function(elem,index){
        let mm = document.createElement('div');
        mm.setAttribute('class', 'output_here');
        mm.innerHTML = `
        <div>
        <p class="count_p">${index+1}.</p>
    </div>
    <div>
        <p class="task_output">${elem.task}</p>
    </div>
        `
        let div3 = document.createElement('div');
        div3.addEventListener('click', () => {
            remove(index);
        })
        div3.setAttribute('class', 'remove_btn');
        let p = document.createElement('p');
        p.innerHTML = "remove";
        div3.append(p);
        mm.appendChild(div3)
        maindiv.append(mm);
    })
}

function remove(index) {
    arr.splice(index, 1);
    localStorage.setItem('listItems', JSON.stringify(arr));
    displayTable(arr);
}