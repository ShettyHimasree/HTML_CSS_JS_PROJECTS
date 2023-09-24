
const btnEl = document.getElementById("btn")
const output = document.getElementById("bmi-result")
const weightCond = document.getElementById("weight-condition")

function calculatorBMI(){
    const heightEl = document.getElementById("height").value / 100 ;
    const weightEl = document.getElementById("weight").value




    const bmiValue = weightEl / (heightEl * heightEl)
    

    output.value = bmiValue;


    if(bmiValue < 18.5){
          weightCond.innerText = "under Weight"
    } else if(bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightCond.innerText = "Normal Weight"
    }
     else if(bmiValue >= 25 && bmiValue <= 29.9)
    {
        weightCond.innerText = "Over Weight"
    }
     else if(bmiValue >= 30 )
    {
        weightCond.innerText = "Obesity"
    }


   
}

btnEl.addEventListener("click", calculatorBMI)