console.log(document);
var plus = document.querySelectorAll(".plus");
console.log(plus);
var minus = document.querySelectorAll(".minus");
console.log(minus);

function inc(e) {
  var btn = e.target;
  var div = btn.parentElement;
  var tr = div.parentElement.parentElement
  var unitPrice=Number(tr.querySelector('.unitPrice').innerHTML)
  var price= tr.querySelector('.price')
  var p = div.querySelector("p");
  var count=Number(p.innerHTML)
  count+=1
  p.innerHTML = count
  p.innerHTML = count
  price.innerHTML= count * unitPrice
  somme()
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", inc);
}
function ince(e) {
  var btn = e.target;
  var div = btn.parentElement;
  console.log(div)
  var tr = div.parentElement.parentElement
 var  unitPrice=Number(tr.querySelector('.unitPrice').innerHTML)
  var price= tr.querySelector('.price')
  var p = div.querySelector("p");
  var count=Number(p.innerHTML)
  if (count > 0) {
    count-=1
    p.innerHTML=count
    price.innerHTML= count * unitPrice
    somme()
  }
}
for (let i = 0; i < minus.length; i += 1) {
  minus[i].addEventListener("click", ince);
}
    
var all=document.getElementById('total')
var total=Number(all.innerHTML)
var prices = document.querySelectorAll(".price")

function somme () {
  var s=0
  for (let i =0 ; i<prices.length; i++){
  s= s+ Number(prices[i].innerHTML)
}
all.innerHTML = s 
}

var like = document.getElementsByClassName('like')
for (let i=0 ; i<like.length; i++){
    like[i].addEventListener('click',function(){
        if (like[i].style.color=="red") {
            like[i].style.color= "#424242"}
        else {
            like[i].style.color="red"
        }
    })
}
var deleteBtns = document.getElementsByClassName('delete')
function del(e){
var btn = e.target
var tr = btn.parentElement.parentElement.parentElement.parentElement
var price = tr.querySelector('.price')
price.innerHTML = 0
tr.remove()
somme()
console.log(tr);
}
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click',del) 
}





        

           
    
    











