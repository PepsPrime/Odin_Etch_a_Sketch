let container = document.querySelector("div.container");



for(i=0; i < 32*32;i++) {
    let box = document.createElement("div");
    box.classList.add("box");
/*     box.innerText = "--" */
    container.appendChild(box);
    
}

let btn = document.querySelector("button")
let boxGrid = document.querySelectorAll(".box")

btn.addEventListener("click", function(e) {
    let sideLength = Number(prompt("Enter the number of square per side : ",32))
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    let newLength = 960/sideLength;
    for(i=0; i < sideLength**2 ;i++) {
            let box = document.createElement("div");
            box.className = "box"
            box.style.width = `${newLength}px`
            box.style.height = `${newLength}px`
            container.appendChild(box);
            
    }

    })


/* container.forEach(function(element) {
    element.addEventListener('click', (e) => {
        e.target.setAttribute("style","background-color:red")
    })
}) */

container.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "red"
})