function surface(){
    var longueur=document.getElementById("longueur").value;
    var largeur=document.getElementById("largeur").value;
    var surface;
    if (longueur<=0){
        document.getElementById("erreurlongueur").innerHTML="Vous devez saisir la longueur";
    }
    else if
     (largeur<=0){
        document.getElementById("erreurlargeur").innerHTML="Vous devez saisir la largeur";
    }
    else {

    surface=longueur*largeur  
    document.getElementById("message").innerHTML= 'votre superficie est: '+surface 
}
}


// function surface(){

//     var longueur=document.getElementById("longueur").value;
//     var largeur=document.getElementById("largeur").value;
//     var surface=0

//     if (longueur<=0){
//         document.getElementById("erreurlongueur").innerHTML="Vous devez saisir la longueur";
//     }
//     else if
//      (largeur<=0){
//         document.getElementById("erreurlargeur").innerHTML="Vous devez saisir la largeur";
//     }
//     else {

//     surface=longueur*largeur
//     document.getElementById("surface").innerHTML= surface;
// }}


