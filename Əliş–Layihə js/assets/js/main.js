let body = document.body;
let div = document.querySelector('main>#input');
let plus = document.querySelector('#add-input');
let add = document.querySelector('#button');
let ul = document.querySelector('ul');

plus.addEventListener("click", (event) => {
    event.stopPropagation();

    let inputDiv = document.createElement('div');
    let input = document.createElement('input');
    let img = document.createElement('img');
    // Attributes
    input.setAttribute("type", "text");
    // image attribute
    img.setAttribute('src', 'assets/x.png');
    img.setAttribute('class', 'x');
    // Append
    inputDiv.append(input);
    inputDiv.append(img);
    div.insertBefore(inputDiv, ul)
});

add.addEventListener("click", () => {
    let li = document.createElement('li');
    let inputs = document.querySelectorAll('input')
    let divs = document.querySelectorAll("#input > div");
    // Append
    ul.append(li)
    inputs.forEach((item, index) => {
        li.innerText = inputs[index].value;
        li.innerHTML+='<img class="x2" src="assets/x2.png">';
        if (index === inputs.length - 1) {
            divs[index].remove();
        }
    })
    ul.style.display = "block";
});
let images = document.querySelectorAll('');
img.addEventListener("click", ()=>{
    
    images.forEach((item, index)=>{
        item.remove();
    })
})
// img.addEventListener('mouseover', ()=>{
//     img.
// })



