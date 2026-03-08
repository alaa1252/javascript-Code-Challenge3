// a section.

function task1(){
const h1=document.getElementById("title")
console.log(h1.textContent)

const h1b=document.querySelector("h1")
console.log(h1b.textContent)

const h1c=document.getElementsByTagName("h1")[0]
console.log(h1c.textContent)
}

function task2(){
const p=document.querySelectorAll("p")
p[1].textContent="Second paragraph changed"
}

function task3(){
document.querySelectorAll(".item").forEach(el=>{
el.style.color="blue"
})
}

function task4(){
const input=document.getElementById("username")
console.log(input.value)
}

function task5(){
document.querySelectorAll("button").forEach(btn=>{
btn.style.border="2px solid red"
})
}

function task6(){
const first=document.querySelector("ul li")
console.log(first)
}

function task7(){
const el=document.querySelector('[data-id="5"]')
console.log(el)
}

function task8(){
const el=document.getElementById("title")
console.log(el.tagName)
}

// b section.

function task9(){
document.getElementById("heading").textContent="Welcome to DOM!"
}

function task10(){
document.getElementById("playground").innerHTML="<strong>Hello</strong>"
}

function task11(){
document.querySelector("button").style.background="yellow"
}

function task12(){
document.querySelectorAll("p").forEach(p=>{
p.style.fontSize="20px"
})
}

function task13(){
document.getElementById("heading").classList.add("active")
}

function task14(){
document.getElementById("heading").classList.toggle("active")
}

function task15(){
document.getElementById("heading").style.display="none"
}

function task16(){
document.getElementById("image").src="https://via.placeholder.com/200"
}


