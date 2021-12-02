
                var x = document.getElementById("likebutton");
                x.addEventListener("click", myFunction);
                x.addEventListener("click", someOtherFunction);
                
                function myFunction() {
                  alert ("Do you like our website?");
                }
                function someOtherFunction() {  alert ("We like it too!");}
                
                    document.body.addEventListener("click", function(){
                      document.body.style.backgroundColor = "#3FBAAE";
                    });
                    
