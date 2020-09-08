//1
// function ismultiple(n, m){
//     return n % m ===0
// }

// let resultat = ismultiple(15, 5);
// console.log(resultat)

//2
// function iseven(i){
//     return ismultiple(i, 2);
// }
// let resultat = iseven(8)
// console.log(resultat);

// //3
// function ismultiple(n, m){
//     return n % m ===0
// }
// let estmultiple = function(n,m) {
//     return n % m ===0;
// }
// estmultiple(8, 3);

// let ismultiple = (n, m) => {
//     return n % m === 0;
// }

// function addition(a, b){
//     return a + b
// }
// let resultat = addition(3, 6);
// // console.log("resultat = " + resultat);
// console.log(`resultat= ${resultat}`);

// function additionner(...a){
//     let resultat = 0;
//     for (const arg of object) {
//         resultat +=
        
//     }
// }

// let multiplication = (a, b) => a * b;
// (function multiplication (a, b){
//     return a*b;
// }) (6, 9);

//fonction auto-exécutée
// (()=> {
//     prompt("entrez votre prenom")
// })()

// function portée(){
//     for  (var i=0; i<5; i++){
//         console.log(`portée=${i}`);
//     }
//     console.log(i);
// }

// class Compte{
//     numero;
//     solde;
//     constructor(n){
//         this.numero = n;
//         this.solde = 50;
//     }
//     crediter(montant){
//         this.solde +=montant;
//     }
// }


// let compteA = new Compte("001");
// compteA.crediter(montant:5000);
// console.log(compteA);



// let compte1 = new Compte();
// let compte2 = new Compte();
// compte1.numero = "001";
// compte1.solde = 300;

// compte1 == compte2;
// console.log(compte1==compte2);

let personne = new Object;
personne.prenom="Joachim";
personne.Age=52;
console.log(personne);