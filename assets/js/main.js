let body = document.body;
let add = document.querySelector('#add');
let tasks = document.querySelector('#tasks')
let ul = document.querySelector('ul');
let input = document.querySelector('input')
// Add LI tag;
add.addEventListener("click", () => {
    if (input.value !== '' && input.value !== ' ') {
        let li = document.createElement('li');
        ul.append(li);
        li.innerText = input.value;
        li.innerHTML +='<img class="image" src="assets/x.png">' 
        tasks.style.display = "block";
    }else{
        alert('Metn daxil edin');
    }
    input.value="";
})
// Changing of photo of remove
ul.addEventListener("mouseover", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x2.png";
     }
})
ul.addEventListener("mouseout", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.src="assets/x.png";
     }
})
// Remove
ul.addEventListener("click", (e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()
        if(ul.innerHTML.trim()===""){
            tasks.style.display = "none";
        }
    }
})
// Sort
let sort = document.getElementById('asc');
let count = 0;
sort.addEventListener("click", (e)=>{
    let arr=[];
    let listOfLI = document.getElementsByTagName('li');
    // Pushing LI's to array
    for(let elem of listOfLI){
        arr.push(elem.outerHTML)
        console.log(arr)
    }
    if(count%2===0){
        sort.setAttribute('src', 'assets/ascending.png')
        arr.sort(function (a, b){
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });console.log(arr)
    }
    else if(count%2===1){
        sort.setAttribute('src', 'assets/descending.png')
        arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        }).reverse()
    }
    count+=1;
    // UL innerHTML
    ul.innerHTML="";
    arr.forEach((item)=>{
        ul.innerHTML+=item
    })
})
// Additional buttons
let darkmode = document.getElementById('darkmode');
darkmode.addEventListener("click", ()=>{
    body.style.backgroundColor="rgb(46, 45, 45)"
    document.querySelector('h2').style.color="white"
    ul.style.color="white"
})
let lightmode = document.getElementById('lightmode');
lightmode.addEventListener("click", ()=>{
    body.style.backgroundColor="white"
    document.querySelector('h2').style.color="black"
    ul.style.color="black"
})
let overflow = document.getElementById('overflow');
overflow.addEventListener("click", ()=>{
    if(overflow.innerText==="Overflow"){
        ul.parentElement.style.overflowY="scroll"
        ul.style.height='100px'
        overflow.innerText="No overflow"
    }
    else if(overflow.innerText==="No overflow"){
        ul.parentElement.style.overflowY="hidden"
        ul.style.height='fit-content'
        overflow.innerText="Overflow"
    }
})
// ENTER button pressed case
input.addEventListener('keydown', (event)=>{
    if(event.key=="Enter"){
        if (input.value !== '' && input.value !== ' ') {
            let li = document.createElement('li');
            ul.append(li);
            li.innerText = input.value;
            li.innerHTML +='<img class="image" src="assets/x.png">' 
            tasks.style.display = "block";
        }else{
            alert('Metn daxil edin');
        }
        input.value="";
    }      
})
