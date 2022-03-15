var btns = document.querySelectorAll('.btn-cont');
var btnplus = document.querySelectorAll('.plus');
var btnminus = document.querySelectorAll('.minus');
var valeur = document.querySelectorAll('.btn-cont > p');
var prixTotal = document.querySelectorAll('.price');
var prixuni = document.querySelectorAll('.unitPrice');
var trows = document.getElementsByTagName('tr');
var totalgen = document.querySelector('#total');
var dele = document.querySelectorAll('.delete');
var like = document.querySelectorAll('.like');

function plus_minus(e){
   var val = parseInt((this.querySelector('p')).innerHTML);
    var cible = e.target; 
  if (cible.innerHTML == '+'){val++;}
    else if (cible.innerHTML=='-'){if (val >0){{val--;}}}
    (this.querySelector('p')).innerHTML = val;    
}

for (let i = 0; i < btns.length; i++) {  
    btns[i].addEventListener('click',plus_minus);
}

function total_art (e){
        cible = e.target;
        var x = parseInt((this.querySelector('p')).innerHTML);
        var y = parseInt((this.querySelector('.unitPrice')).innerHTML);
        var t = parseInt((document.querySelector('#total')).innerHTML);
        
       if (cible==this.querySelector('.plus')) 
       {    
           (this.querySelector('.price')).innerHTML = x * y ;  
           (document.querySelector('#total')).innerHTML = t + y ;
       } else if (cible==this.querySelector('.minus') && (this.querySelector('.price')).innerHTML != '0') 
       {
        (this.querySelector('.price')).innerHTML = x * y ;  
        (document.querySelector('#total')).innerHTML = t - y ;
       }
       //check control not perfect enough
    /*   if (cible==this.querySelector('input') && (this.querySelector('.check')).checked == true)
            { 
                (document.querySelector('#total')).innerHTML =  t  + (x*y);
            }else if (cible==this.querySelector('input') && (this.querySelector('.check')).checked == false) 
            {
                (document.querySelector('#total')).innerHTML =  t  - (x*y);
            }   */   
}
 function dele_Art(e){ 
     cible = e.target.parentNode.parentNode.parentNode.parentNode;
     var c = (cible.querySelector('.price')).innerHTML;
     var d = (document.querySelector('#total')).innerHTML;
     (document.querySelector('#total')).innerHTML = parseInt(d) - parseInt(c);
     cible.remove();
 }
function like_Art(e){       
        if ((e.target).style.color != 'red'){
           (e.target).style.color= 'red';
        }else {
           (e.target).style.color= 'black'
        }         
    }
for (let i = 1; i < trows.length; i++) {  
    trows[i].addEventListener('click',total_art);
}

for (let i = 0; i < dele.length; i++) {  
    dele[i].addEventListener('click',dele_Art);
}
for (let i = 0; i < like.length; i++) {  
    like[i].addEventListener('click',like_Art);
}