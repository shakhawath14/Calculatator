let buttons = document.querySelectorAll(".btnContainer button");
let expression = "";

let screen = document.querySelector("#screen");
screen.textContent = "";
for(let item of buttons){
    item.addEventListener("click", (event)=>{
        console.log(event);
        let value = event.srcElement.innerText;
        if(value == "AC"){
            expression = "";
        }
        else if (value == "="){
            expression = eval(expression);
        }
        else if(value == "Del")
        {
            let len = expression.length;
            expression = expression.substring(0,len-1);
        }
        else{
            expression += event.srcElement.textContent;
        }
        
        screen.textContent = expression;
    });
}