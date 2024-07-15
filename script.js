// Importing Images from module images.js file
import images from "./module/images.js"

// fetching the Main div and creating the root div of images
let maindiv = document.querySelector('#maindiv')
let root = document.createElement('div')
root.id = 'root'

// Setting up the button's and root div here ###
let button1 = document.createElement('button')
button1.innerHTML = 'Next'
button1.id = 'next'
maindiv.appendChild(button1)

maindiv.appendChild(root)

console.dir(button1)
for (let i = 0; i < images.length; i++) {

    let img = document.createElement("img")
    img.src = images[i]
    img.className = `imgesofcar`
    root.appendChild(img);
}

let button2 = document.createElement('button')
button2.innerHTML = 'Previous'
button2.id = 'previous'
maindiv.appendChild(button2)

// Left Button Button's
let incre = 0;
let leftIncrementValue = 0;

// Funcnality of Button's started

let leftClickCount = 0;


let holeImages = Array.from(document.querySelectorAll('.imgesofcar'))

button2.onclick = () => {
    if (leftClickCount <= 30) {

        leftClickCount =( leftClickCount - (incre * 5))
        incre = 0;
        console.log(leftClickCount)

        holeImages.forEach((element) => {
            leftClickCount++;
            element.style.transform = `translateX(-${30 * leftClickCount}px)`
        })
    }
}



//leftClickCount
//start

button1.onclick =  ()=>{
    
    let totalClickCount = leftClickCount / 5;
    if(incre <= totalClickCount){
        ++incre;
        leftIncrementValue = (leftClickCount * 30 ) - (150 * incre) ;
    }

    holeImages.forEach((element) => {
        element.style.transform = `translateX(-${(leftIncrementValue)}px)`
    })
}