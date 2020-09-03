// let n;
// function plage( n >= 40 && n <= 60){
// console.log("votre nombre est dans la plage 40 - 60")
// }

// let n;
// let=prompt
// if(n>=40 && n<=60){
//     console.log("vous etes dans la plage 40-60")
// } else if(n>=70 && n<=100){
//     console.log("vous etes dans la plage 70 - 100")
// } else if(n>60 && n<70){
//     console.log("vous n'etes ni dans la plage 40 - 60 ni dans la plage 70 - 100")
// }else{
//     console.log("vous n'etes ni dans la plage 40 - 60 ni dans la plage 70 - 100")
// }

//exercice 1

// function numberRang(x, y){
// if((x>=40 && x<=60 && y>=40 && y<=60) || (x>=70 && x<=100 && y>=70 && y<=100) )  {
//     return true;
// }  else{
//     return false;
// }
// }
// console.log(numberRang(80,97 ));

//exercice2

function diff_cal(n){
    if(n <= 19) {
        return (19-n);
    }else{
        return((n - 19)*3);
    }
}
console.log(diff_cal(20));