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

function task21(e){
e.preventDefault()
console.log("Form prevented reload")
}

function task22(){
document.querySelectorAll("#list li").forEach(li=>{
li.onclick=function(){
this.style.background="yellow"
}
})
}

function task23(e){
e.target.disabled=true
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

// e section 

function task33(){
const li=document.createElement("li")
li.textContent="New Item"
document.getElementById("list").appendChild(li)
}

function task34(){
const btn=document.createElement("button")
btn.textContent="Dynamic Button"

btn.onclick=function(){
alert("Dynamic button clicked")
}

document.body.appendChild(btn)
}

function task35(){
const div=document.createElement("div")
const title=document.createElement("h3")
const p=document.createElement("p")

title.textContent="Title"
p.textContent="Paragraph"

div.appendChild(title)
div.appendChild(p)

document.body.appendChild(div)
}

function task36(){
const input=document.createElement("input")
const ref=document.getElementById("playground")

document.body.insertBefore(input,ref)
}

function task37(){
const el=document.createElement("div")
el.textContent="Prepended"
document.body.prepend(el)
}

function task38(){
const msg=document.createElement("div")
msg.textContent="Notification"

document.body.appendChild(msg)

setTimeout(()=>{
msg.remove()
},3000)
}

function task39(){
const card=document.createElement("div")

card.innerHTML=`
<img src="https://via.placeholder.com/100">
<h3>Title</h3>
<p>Description</p>
<button>Buy</button>
`

document.body.appendChild(card)
}

function task40(){
const el=document.getElementById("list")
const clone=el.cloneNode(true)

document.body.appendChild(clone)
}

// f section

function task41(){
const li=document.createElement("li")
li.textContent="Todo Item"

const del=document.createElement("button")
del.textContent="Delete"

del.onclick=function(){
li.remove()
}

li.appendChild(del)

document.getElementById("list").appendChild(li)
}

function task42(){
const textarea=document.getElementById("textarea")
const counter=document.getElementById("counter")

counter.textContent=textarea.value.length+" chars"
}

function task43(){
document.querySelectorAll("#list li").forEach(li=>{
li.onclick=function(){
document.querySelectorAll("#list li").forEach(el=>{
el.classList.remove("selected")
})
this.classList.add("selected")
}
})
}

function task44(){
const menu=document.getElementById("list")
menu.style.display = menu.style.display==="none" ? "block" : "none"
}

function task45(){
document.body.classList.toggle("dark")
}

function task46(){
const data=[
{name:"Apple",price:3},
{name:"Banana",price:2}
]

const table=document.createElement("table")

data.forEach(item=>{
const row=document.createElement("tr")

row.innerHTML=`<td>${item.name}</td><td>${item.price}</td>`

table.appendChild(row)
})

document.body.appendChild(table)
}

function task47(){
alert("Product clicked → show details")
}

function task48(){
const img=document.getElementById("image")
img.src="https://via.placeholder.com/"+(Math.random()*200+100)
}

function task49(){
const input=document.getElementById("username")

if(input.value===""){
input.style.border="3px solid red"
}
}

function task50(){
const p=document.querySelector("p")
p.style.display=p.style.display==="none"?"block":"none"
}


// bonus

let clicks=0
function task51(){
clicks++
alert("Clicks: "+clicks)
}

function task52(){
const input=document.getElementById("username")

const li=document.createElement("li")
li.textContent=input.value

li.onclick=function(){
li.style.textDecoration="line-through"
}

document.getElementById("list").appendChild(li)
}

function task53(){
let size=100

setInterval(()=>{
size+=5
document.getElementById("image").style.width=size+"px"
},500)
}

function task54(){
alert("Tab system example")
}