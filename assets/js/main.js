let body = document.body;
let div = document.querySelector('main>#input');
let plus = document.querySelector('#add-input');
let add = document.querySelector('#button');

plus.addEventListener("click", (event)=>{
    event.stopPropagation();
    let inputDiv = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    inputDiv.append(input);
});
add.addEventListener("click", ()=>{
    console.log('isleyir')
    
});


