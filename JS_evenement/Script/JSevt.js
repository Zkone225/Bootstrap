// var votreNom 
// prompt(`quel est votre prenom`);
// alert(`Bonjour `+ votreNom +`, comment allez-vous ce aujourd\'hui?`);


function affiche(){
    let prenom=document.getElementById("nom").value;
    document.getElementById("AfficherMessage").innerHTML='Bonjour '+prenom + ' comment allez-vous aujourd\'hui?';
}