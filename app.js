
        // let numbers = [10,20,30,40,50,60,70,80,90,100];

        // let sum =0;
        // for(let number of numbers){
        //     console.log(number);
        //     sum+=number
        // }

        // console.log("The sum is :"+sum);
        
// numbers.forEach((number) => {
//     document.write(`<h1>${number}</h1>`);    
// })

// console.log(sum);

// let IsTrue = 10 == "10";
// console.log(IsTrue); // == Check the value only


// IsTrue = 10 === "10";
// console.log(IsTrue); // == Check the value and type also

function calc(){
    let DisplayText =document.getElementById("DisplayText").value;
    let Output   =document.getElementById("print");

    let sum= eval(DisplayText);
    Output.innerHTML=sum;


    // let sum=0;
    // if(operator == "+"){
    //     sum=number01+number02;
    // }else if(operator == "-"){
    //     sum=number01-number02;
    // }else  if(operator == "*"){
    //     sum=number01*number02;
    // }if(operator == "/"){
    //     sum=number01/number02;
    // }


}

