let body = document.body;
let div = document.querySelector('main>#input');
let plus = document.querySelector('#add-input');
let add = document.querySelector('#button');
let ul = document.querySelector('ul');
let ascOrDesc = document.getElementById('asc');

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

// Add part
add.addEventListener("click", () => {
    
    let inputs = document.querySelectorAll('input')
    let divs = document.querySelectorAll("#input > div");
    // Append
    
    inputs.forEach((item, index) => {
        if (inputs[index].value !== '' || inputs[index].value !== ' ') {
            let li = document.createElement('li');
            ul.append(li);
            li.innerText = inputs[index].value;
            li.innerHTML += '<img class="x2" src="assets/x2.png">';
            if (index === inputs.length - 1) {
                divs[index].remove();
            }
        }

    })
    ul.style.display = "block";

});

// X part
let images = document.getElementsByClassName('x2');
console.log(images);
for (let element of images) {
    console.log(element);
    element.addEventListener("click", () => {
        console.log('event listener isledi')
        element.parentElement.remove()
        console.log(ul)
        if (ul.length === 1) {
            console.log('Hey buddy');
        }
    })
}

// Sort part
let count = 0;
ascOrDesc.addEventListener("click", () => {

    let arr = [];
    let li = document.getElementsByTagName('li')
    console.log(li);
    for (let el of li) {
        arr.push(el.outerHTML);
        // console.log(arr, 'this is my array')
    }
    if (count % 2 === 0) {
        arr.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });
        ascOrDesc.setAttribute('src', 'assets/descending.png')
    }
    else if (count % 2 === 1) {
        arr.reverse();
        ascOrDesc.setAttribute('src', 'assets/ascending.png')
    }
    count += 1;
    console.log(ascOrDesc);
    ul.innerHTML = '';
    arr.forEach((item) => {
        console.log(item, 'this is my item')
        ul.innerHTML += item;
    })
})




