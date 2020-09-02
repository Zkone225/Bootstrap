// console.log('hello world');

// var firstname;
// firstname="papapa";
// firstname=45;
// firstname=true;
// console.log(typeof(firstname));

// // opérateur

// var age =  65;
// var name = "big joe"
// console.log("mon papa est " + name + " et il a " +age + " ans");
// console.log(`Mon papa est ${name} et il a ${age} ans`);

// var val=parseInt(prompt("entrez un nombre:"));
// console.log(val);
// console.log(typeof(val));

// Les conditions

var age=Number(prompt("Entrez votre age:"));

if(age<0){
    console.log("Attention, vous devez avoir au moins 1 an")
}
else if(age<18){
    console.log("Vous etes un jeune homme")
}else if(age ==18){
    console.log("vous etes un vrai homme")
}else{
    console.log("vous etes un adulte")
}
