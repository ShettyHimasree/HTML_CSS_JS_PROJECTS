const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")








function computeTemp(event){
    const currentVl = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentVl + 273.32).toFixed(2);
            fahrenheitEl.value = (currentVl * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((currentVl -32 ) / 1.8).toFixed(2);
            kelvinEl.value = ((currentVl - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currentVl - 273.32).toFixed(2)
            fahrenheitEl.value = ((currentVl - 273.32 ) * 1.8 + 32).toFixed(2);
            break;
    
        default:
            break;
    }
}