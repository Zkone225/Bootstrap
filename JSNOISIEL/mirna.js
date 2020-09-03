//LES FONCTIONS

//1er possibilité

//function add(num1, num2){
//    var n = num1 + num2
//    return n;
    // return permet de nous retourner le résultat localement
//}
//var p = add(2,5);
// ON RECUPERE LE RESULTAT DE LA FONCTION POUR LE RUTILISER

//var division =14/p
//console.log(division)

//var a = add(4,6);
//var division = 14/a
//console.log(division)

//SI ON DEFINI DEJA UN DES NOMBRE
//function add(num1, num2=2){
//    var n = num1 + num2
//    return n;
    // return permet de nous retourner le résultat localement
//}
//var p = add(2);
// ON RECUPERE LE RESULTAT DE LA FONCTION POUR LE RUTILISER

//var division =14/p
//console.log(division)

//var a = add(4);
//var division = 14/a
//console.log(division)

//difference avec une fonction, une fonction marche même si on la met avant de déclarer une variable ou après. alors que le var seul
//ne fonctionne que si la variable est déclarer avant cf exemple. 

//CF fonctionne pas
//var soustraction = a - b
//console.log(soustraction)
//var a = 10 , b=5

//CF fonctionne
//var a = 10 , b=5
//var soustraction = a - b
//console.log(soustraction)


//Difference entre VAR, LET, CONST

//VAR
//function add(num1, num2){
  // if(true){
    //    var n = num1 + num2
      //  console.log(n);
    //}
    
}
//add(4, 5);

//function add(num1, num2){
  //  if(true){
    //     var n = num1 + num2
         
     //}
     //console.log(n);
 //}
 //add(4, 5);
 //LES 2 DONNENT UN RESULTA

//LE LET
//function add(num1, num2){
//    if(true){
//         let n = num1 + num2
//         console.log(n);
//     }
     
// }
// add(4, 5);
 
 //function add(num1, num2){
   //  if(true){
     //     let n = num1 + num2
          
     // }
      //console.log(n);
  }
  //add(4, 5);
  //SEULMENT LE 1ER DONNEUN RESULTA

  //LA CONSTANT doit toujours être déclarer et je change plus elle est fixe
  const name = "ABOUDOU";
  name=JHON
  console.log(name);

  //BONNE ECRITURE
  const name = "ABOUDOU";
  console.log(name);

  // IL ne reconnaitra pas JHON ALORS QUE LET PREND LA DERNIERE VARIABLE RENTREE
  let name = "ABOUDOU";
  name=JHON
  console.log(name);
  //let affichera Jhon la dernière valeur entrée