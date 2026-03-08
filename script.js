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


