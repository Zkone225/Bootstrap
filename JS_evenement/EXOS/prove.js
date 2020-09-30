// function surface(){
// var longueur = document.getElementById("longueur").value;
// var largeur = document.getElementById("largeur").value;
// var surface;
// if(longueur<=0){
//     document.getElementById("erreurlongueur").innerHTML="vous devez entrer une longueur"
// } else if(largeur<=0){
//     document.getElementById("erreurlargeur").innerHTML="vous devez entrer une largeur"
// }else{
//         surface=longueur*largeur
//         document.getElementById("message").innerHTML="votre superficie est:" +surface
//     }
// }


// function surface(){
//     var longueur=document.getElementById("longueur").value;
//     var largeur=document.getElementById("largeur").value;
//     var surface;
//     if (longueur<=0){
//         document.getElementById("erreurlongueur").innerHTML="Vous devez saisir la longueur";
//     }
//     else if
//      (largeur<=0){
//         document.getElementById("erreurlargeur").innerHTML="Vous devez saisir la largeur";
//     }
//     else {

//     surface=longueur*largeur  
//     document.getElementById("message").innerHTML= 'votre superficie est: '+surface 
// }
// }

function surface(){
    var eta =document.getElementById("eta").value;
    if (eta < 18){
        document.getElementById("message").innerHTML="sei un minore";
    }else if(eta == 18){
        document.getElementById("message").innerHTML="hai la maggior età";
    }else{
        document.getElementById("message").innerHTML="sei un adulto ormai";
    }
}