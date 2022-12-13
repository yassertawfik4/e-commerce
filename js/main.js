let open=document.querySelector('.btn')
let close=document.querySelector('#close-card')
let card =document.querySelector('.card')
//open cared
open.addEventListener('click',()=>{
    card.classList.add('active')
})
//close card
close.addEventListener('click',()=>{
    card.classList.remove('active')
})

var addCard=document.getElementsByClassName('add-card')
for(var i=0; i < addCard.length;i++){
    var button=addCard[i]
    button.addEventListener('click',addCaredClicked)
}
var array;
if(localStorage.getItem('prodect')==null){
    array=[]
}
else{
    array=JSON.parse(localStorage.getItem('prodect'))
    dispalyProdect();
}
function addCaredClicked(e){
        var button=e.target
        var shopProdect=button.parentElement
        var prodect={
            title:shopProdect.getElementsByClassName('prodect-title')[0].innerText,
            price:shopProdect.getElementsByClassName('price')[0].innerText,
            prodectImg:shopProdect.getElementsByClassName('prodect-img')[0].src
        }
        array.push(prodect)
        localStorage.setItem('prodect',JSON.stringify(array))        
        dispalyProdect()
    }
function dispalyProdect(){
    var cartoon=``
    for(var i =0 ;i < array.length;i++){
        cartoon+=`<div class="card-box">
        <img class="card-img" src="${array[i].prodectImg}" alt="">
        <div class="card-info">
            <div class="card-prodect-title">${array[i].title}</div>
            <div class="card-price">${array[i].price}</div>
        </div>
        <i onclick="removeCardItem(${i})" class="bx fa-solid fa-trash-can card-remove"></i>
        </div>`
    }
    document.getElementsByClassName('card-content')[0].innerHTML=cartoon
}
function removeCardItem(prodectInex){
    array.splice(prodectInex,1)
    localStorage.setItem('prodect',JSON.stringify(array))
    dispalyProdect()
}
var btnBuy=document.getElementsByClassName('btn-buy')
function test(){
    alert('all prodect buy')
    array.splice(0,5)
    localStorage.setItem('prodect',JSON.stringify(array))
    dispalyProdect()
}