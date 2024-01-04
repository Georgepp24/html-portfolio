//var numberOfItems = document.querySelectorAll(".sound").length;

//Detecting Button Click Press

for(var i=0; i<document.querySelectorAll(".sound").length; i++){

      document.querySelectorAll('.sound')[i].addEventListener("click", function(){
        var buttonInnerHTML2 = this.innerHTML;
        makeSound(buttonInnerHTML2);

  })
}

//Detecting Keyboard Press

      document.addEventListener("keydown", function(event) {
        makeSound(event.key);
      });

function makeSound(key) {
          switch (key) {

            case "z":
                      var tracer = new Audio("sounds/tracers.mp3");
                      tracer.play();
                  break;

            case "x":
                      var r6 = new Audio("sounds/r6s.mp3");
                      r6.play();
                  break;

            case "c":
                      var mt = new Audio("sounds/mt10.mp3");
                      mt.play();
                  break;

            case "v":
                      var ap = new Audio("sounds/rsv4.mp3");
                      ap.play();
                  break;

            case "b":
                      var cbr = new Audio("sounds/cbr.mp3");
                      cbr.play();
                  break;

            case "n":
                      var ducati = new Audio("sounds/panig.mp3");
                      ducati.play();
                  break;

              case "m":
                      var h2r = new Audio("sounds/ninja.mp3");
                      h2r.play();
                  break;

              case "l":
                      var hayabusa = new Audio("sounds/busa.mp3");
                      hayabusa.play();
                  break;

              case "a":
                      var tate = new Audio("sounds/adreas.mp3");
                      tate.play();
                  break;

              case "s":
                      var lia = new Audio("sounds/lialad.mp3");
                      lia.play();
                  break;

            default: console.log(buttonInnerHTML2);

          }
}
