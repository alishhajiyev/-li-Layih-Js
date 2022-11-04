let body = document.body;
let add = document.querySelector('#add');
let tasks = document.querySelector('#tasks')
let ul = document.querySelector('ul');
let input = document.querySelector('input')
// let images;
add.addEventListener("click", () => {
    if (input.value !== '' && input.value !== ' ') {
        let li = document.createElement('li');
        ul.append(li);
        li.innerText = input.value;
        li.innerHTML +='<img class="image" src="assets/x.png">' 
        tasks.style.display = "block";

    }
    else {
        alert('Metn daxil edin');
    }
    input.value=""
    // images = document.getElementsByClassName('image')
    
})

ul.addEventListener("click", (e)=>{
if(e.target.tagName==='IMG'){
   e.target.parentElement.remove()
}
})




// images.addEventListener('click', (e)=>{
//     console.log(e.target.parentElement)
//     e.target.parentElement.remove()
// })

//     element.addEventListener("click", () => {
//     ascOrDesc.addEventListener("click", () => {