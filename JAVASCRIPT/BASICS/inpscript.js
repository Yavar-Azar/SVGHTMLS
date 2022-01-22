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
  pdos: true
}



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
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
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
    console.log(val1.value)
    console.log(selbasis.value)
}



