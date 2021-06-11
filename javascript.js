
function view(num){
    document.getElementById("result").value+=num
}

function compute(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr(){
    document.getElementById("result").value=""
}

function min() {
    document.getElementById("min").innerHTML = Math.min(10,5,11,15,20,50);
  }

  function max() {
    document.getElementById("max").innerHTML = Math.max(5, 10, 50, 100, 9, 90);
  }