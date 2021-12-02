var x = document.getElementById("conniebutton");
            x.addEventListener("mouseout", myFunction);
            x.addEventListener("click", mySecondFunction);
            function myFunction() {
  document.getElementById("connie").innerHTML += "Bye from Connie!<br>";
}

function mySecondFunction() {
  document.getElementById("connie").innerHTML += "Hi from Connie!<br>";
}
    
        var x = document.getElementById("kamibutton");
        x.addEventListener("mouseout", myFunction);
        x.addEventListener("click", mySecondFunction);
        function myFunction() {
document.getElementById("kami").innerHTML += "Bye from Kami!<br>";
}

function mySecondFunction() {
document.getElementById("kami").innerHTML += "Hi from Kami!<br>";
}