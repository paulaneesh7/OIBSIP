const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        let value = button.getAttribute("value");
        let currentDisplay = display.value;

        if (value === "clear") {
            display.value = "";
        } else if (value === "backspace") {
            display.value = currentDisplay.substring(0, currentDisplay.length - 1);
        } else if (value === "=") {
            try {
            display.value = eval(currentDisplay);
            } catch (error) {
            display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});
