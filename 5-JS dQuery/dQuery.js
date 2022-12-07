
/*
    creating function $query that specify each document element
    creating object that has properties of each command functions click, show and hide
    
*/ 

function $query(parameter){
    let command = {

        //specify documents as elements
        elements: document.querySelectorAll(parameter),

        //creating a function click and its event process
        click: function(callback){
            var element = this.elements;
            for(let i = 0; i< element.length; i++){
                element[i].addEventListener("click", function(event){
                    callback(event);
                });
            }
        },

        //creating a hide function that sets elements display into none
        hide: function(){
             element = this.elements;
            for(let i = 0; i < element.length; i++){
                element[i].style.display = "none";
            }
        }, 

        //creating a show function that sets elements display into block
        show: function(){
             element = this.elements;
            for(let i = 0; i < element.length; i++){
                element[i].style.display = "block";
            }
        }
    }
    
    return command;
}
