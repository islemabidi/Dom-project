let box=Array.from(document.getElementsByClassName('box'));
let box1=Array.from(document.getElementsByClassName('box1'));
let box2=Array.from(document.getElementsByClassName('box2'));
var price= Array.from(document.getElementsByClassName(price));
let conteur=Array.from(document.getElementsByClassName(conteur));
let totalfin=Array.from(document.getElementById(totalfin));

let add=Array.from(document.getElementsByClassName('add'));
for(let i=0;i<box.length;i++) {
    plus[i].addEventListener('click',function() {
        conteur[i].innertext++
        
    })
}

let buttonremove = remove['i']
buttonremove.addEventListener('click',function(remove){
    let buttonclick=event.target
    buttonclick.parentElement.remove()
    price[i].innerHTML=0 ; 
})

let bxbxheartcircle=Array.from(document.getElementsByClassName('heart'));
heart[i].addEventListener("click",changecolor)
