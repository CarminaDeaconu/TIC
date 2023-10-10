console.log("Access granted")

//query selector
const button=document.querySelector('#doSomething')


//evenimente
button.addEventListener("click", printButtonText)

//inner html = ia si taguri gen bold
//inner text = considera tag urile text

function printButtonText(e){
    console.log(e.target.innerText)
}

