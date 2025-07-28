let container = document.querySelector("div.container");

for(i=0; i < 256;i++) {
    let box = document.createElement("div");
    box.innerText =`--`
    container.appendChild(box);
    
}


/* container.forEach(function(element) {
    element.addEventListener('click', (e) => {
        e.target.setAttribute("style","background-color:red")
    })
}) */

container.addEventListener("mouseover", function (e) {
    e.target.setAttribute("style","background-color : red")
})