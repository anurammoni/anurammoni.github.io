document.addEventListener("DOMContentLoaded", function() {
    
    const Car = document.querySelector(".car");
    const showHead = document.querySelector(".cHead");
    const showEye = document.querySelectorAll(".cEye");
    var eyesclosed = false;

    Car.addEventListener("click", () => {

        if (showHead.classList.contains("cHead")) {
            showHead.classList.remove("cHead");
            showHead.classList.add("cHeadShow");
        } else {
            showHead.classList.remove("cHeadShow");
            showHead.classList.add("cHead");
        }
    });

showEye.forEach(function(item) {
    item.addEventListener("click", function() {
  
            alert("poke!");
            item.classList.toggle("active");

            if(item.classList.contains("active")) { 
                document.querySelector("body").style.backgroundColor = "#1b0303";
            } else {
                document.querySelector("body").style.backgroundColor = "#62476f";

            }

        });
    });

 
    // difference between event vs function vs whatever this on top is




});

// const showHideButton = document.getElementById('showhide');
//   showHideButton.addEventListener('click', function() {
//     items.forEach(function(item) {
//       item.classList.toggle('active');
//     });
//   });