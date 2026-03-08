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

// c section

function task17(){
alert("Button clicked!")
}

function task18(){
document.getElementById("playground").style.background="lightblue"
}

function task19(){
const img=document.getElementById("image")
img.style.width="250px"

setTimeout(()=>{
img.style.width="150px"
},1000)
}

function task20(){
const input=document.getElementById("username")
console.log(input.value)
}

function task21(){
event.preventDefault()
console.log("Form prevented reload")
}

function task22(){
document.querySelectorAll("#list li").forEach(li=>{
li.onclick=function(){
this.style.background="yellow"
}
})
}

function task23(){
event.target.disabled=true
}

function task24(){
const p=document.querySelector("p")
p.style.fontWeight="bold"
}

function task25(){
document.body.onclick=function(e){
console.log(e.target)
}
}

function task26(){
document.addEventListener("keydown",function(e){
if(e.key==="Enter"){
alert("Enter pressed")
}
})
}

//d section

function task27(){
const btn=document.querySelector("button")
console.log(btn.parentElement)
}

function task28(){
const ul=document.getElementById("list")
console.log(ul.children)
}

function task29(){
const el=document.querySelector("#list li")
console.log(el.nextElementSibling)
}

function task30(){
const p=document.querySelectorAll("p")[1]
console.log(p.previousElementSibling)
}

function task31(){
document.querySelectorAll("#list li").forEach(li=>{
li.onclick=function(){
console.log(this.parentElement)
console.log(this.parentElement.children)
}
})
}

function task32(){
let el=document.querySelector("#list li")

while(el){
console.log(el)
el=el.parentElement
}
}
