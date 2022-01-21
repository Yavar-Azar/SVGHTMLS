// this is comment

console.log("Hello Yavar")

let firstName = 'Yavar'
let distance = 2.3

let myarra = ['name', 'numb', 3]

let myobject = {
    fermiener: 20.2,
    filename : "testfile"
}


// dif between parameter and arg
function firstfunc(parameter1) {
    console.log(parameter1)
}

console.log(firstfunc("John"));

let num1 = document.getElementById("text1");
let num2 = document.getElementById("text2");


let but3 = document.getElementById("but3")
let result1 = document.getElementById("result1")







but3.onclick = function(){
    if (num1.value != "" && num2.value != ""){
        result1.innerHTML = Number(num2.value)+Number(num1.value);
        console.log("Hiiiiii");
    }else{
        result1.innerHTML = "There is empty field";
    }
}




let content = document.getElementById("content");
let button1  = document.getElementById("showmore");






button1.onclick = function() {

    if(content.className=="open"){
        // shrink the box
        content.className = "";
        button1.innerHTML = "Show more";
        console.log(myarr)
    }else{
        //expand the box
        content.className = "open";
        button1.innerHTML = "Show less";
        console.log(myarr)
    }
};




let mylist = document.getElementById("numlist").value;

const input = document.getElementById("numlist")
let results = document.getElementById("showres")

let myarr =[]

// track changes
input.addEventListener('change', (e) => {  
    console.log(e.target.value.length);
    myarr = e.target.value.split(' ')
    for (let i =0; i<myarr.length; i++){
        results.innerHTML = myarr[i];
    }
  });

 



