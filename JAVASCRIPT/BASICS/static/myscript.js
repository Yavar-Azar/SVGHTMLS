
clicknumber=1;

function startanimation(){
    var mycar=document.getElementById("car1");
    mycar.style.animationName="fixcar";
    clicknumber = clicknumber+1;
    var div2=document.getElementById("div2");
    var tt = document.getElementById("duration").value;
    mycar.style.animationName="carmotion";
    if (tt==''){
        div2.innerHTML="speed is "+String(tt);
    }else{
        div2.innerHTML="No speed";
        mycar.style.animationDuration= tt+"s";
        console.log(tt);
    }
    console.log("click number is \n"+clicknumber);
}