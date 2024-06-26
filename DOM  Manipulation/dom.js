//DOM Manipulation & Event Handling

//DOMContentLoaded
document.addEventListener("DOMContentLoaded",
    function(event){
        function sayHello(event) {
            console.log(event);
            //console.log(this); - this points to the button
            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            console.log(message);
        //     // Putting the message into the div whose id is content
        //     document.getElementById("content").textContent = message;
            document.getElementById("content").innerHTML = message;
             if(name === "student"){
                var title = document.querySelector("#title")
                .textContent;
                title += " & Lovin' it";
                document.querySelector("#title").textContent = title
             }
        }
        
        // //Unobstrusive event handling - HTML doesn't need to know anything about your JS
        // document.querySelector("button").addEventListener("click",sayHello);
        document.querySelector("button").onclick =sayHello;
        
        document.querySelector("body").addEventListener("mousemove",
            function (event) {
                if(event.shiftKey === true){
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
               
            }
        )
    }
)
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

