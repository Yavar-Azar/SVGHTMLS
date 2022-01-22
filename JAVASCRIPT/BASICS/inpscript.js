// -----------------MODAL SCRIPT


let inputparam = {
  runtype : "scf",
  label : "defaultlabel",
  maxscf : 200,
  kspacing : 0.2,
  cutoff : 200,
  xcfunc : "GGA",
  basis : "dzp",
  spin : true,
  ldos : false,
  pdos: true,
  charge : true,
  potential : true
}



var runtypeval = document.getElementById("runtype").value;
var labelval = document.getElementById("inplabel");
var maxscfval = document.getElementById("maxstep");
var kspacingval = document.getElementById("kspacing");
var cutoffval = document.getElementById("cutoff");
var pdosval = document.getElementById("pdos");
var ldosval = document.getElementById("ldos");
var chargeval = document.getElementById("charge");
var potentialval = document.getElementById("potential");
var basisval = document.getElementById("basis");
var xfuncval = document.getElementById("xcfunc");


console.log(runtypeval)

//  comment this line
console.log(inputparam["pdos"]+" "+inputparam['kspacing'])
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  inputparam['runtype'] = document.getElementById("runtype").value;
  inputparam['label'] = document.getElementById("inplabel").value;
  inputparam['maxscf'] = document.getElementById("maxstep").value;
  inputparam['kspacing'] = document.getElementById("kspacing").value;
  inputparam['cutoff'] = document.getElementById("cutoff").value;
  inputparam['pdos']= document.getElementById("pdos").checked;
  inputparam['ldos'] = document.getElementById("ldos").checked;
  inputparam['charge'] = document.getElementById("charge").checked;
  inputparam['potential'] = document.getElementById("potential").checked;
  inputparam['spin'] = document.getElementById("nspin").checked;
  inputparam['basis']= document.getElementById("basis").value;
  inputparam['xcfunc'] = document.getElementById("xcfunc").value;
  inputparam['xcfunc'] = document.getElementById("xcfunc").value;
  console.log(inputparam['runtype']);
  console.log(inputparam['pdos']);
  console.log(inputparam);
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    inputparam['runtype'] = document.getElementById("runtype").value;
    inputparam['label'] = document.getElementById("inplabel").value;
    inputparam['maxscf'] = document.getElementById("maxstep").value;
    inputparam['kspacing'] = document.getElementById("kspacing").value;
    inputparam['cutoff'] = document.getElementById("cutoff").value;
    inputparam['pdos']= document.getElementById("pdos").checked;
    inputparam['spin'] = document.getElementById("nspin").checked;
    inputparam['ldos'] = document.getElementById("ldos").checked;
    inputparam['charge'] = document.getElementById("charge").checked;
    inputparam['potential'] = document.getElementById("potential").checked;
    inputparam['basis']= document.getElementById("basis").value;
    inputparam['xcfunc'] = document.getElementById("xcfunc").value;
    console.log(inputparam['runtype']);
    console.log(inputparam['pdos']);
    console.log(inputparam);
    modal.style.display = "none";
  }
}







// ------------------------- END MODAL SCRIPT

//  test

let testbut = document.getElementById("test");
let selbasis = document.getElementById("basis");

testbut.onclick = function () { 
    val1 = document.getElementById("Label")
    val2 = document.getElementById("cutoff")
    console.log("---------------\n--------------\n")
    console.log(inputparam)
}



