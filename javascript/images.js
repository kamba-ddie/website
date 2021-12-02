
                var x = images.html.document.getElementById("likebutton");
                x.addEventListener("click", myFunction);
                x.addEventListener("click", someOtherFunction);
                
                function myFunction() {
                  alert ("Do you like our website?");
                }
                function someOtherFunction() {  alert ("We like it too!");}

                    images.body.addEventListener("click", function(){
                      images.html.body.style.backgroundColor = "#3FBAAE";
                    });
                    
