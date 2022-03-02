import ("./index.css");
import Icon from "./todo.jpg";
let form = document.getElementById('form');
let arr = JSON.parse(localStorage.getItem('listItems')) || [];
let img = document.getElementById('img_container');
img.src = Icon;
form.addEventListener('submit',(event) => {
    let text = document.getElementById('task').value;
    let obj = {
        task : text
    }
    arr.push(obj);
    localStorage.setItem('listItems', JSON.stringify(arr))
})
let maindiv = document.getElementById('output_div');
displayTable(arr);
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
        maindiv.append(mm);
    })
}