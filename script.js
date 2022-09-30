const calculatetemp = () => {
    const numbertemp = document.getElementById('temp').value;

    const tempselected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempselected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5)+ 32);
        return fahrenheit;
    }  
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5/9);
        return fahrenheit;
    }    
    let result;
    if (valueTemp == 'cel') {
        result = celToFah(numbertemp);
        document.getElementById('result').innerHTML = `= ${result} °Fahrenheit`;

    } else {
        result = fahToCel(numbertemp);
        document.getElementById('result').innerHTML = ` = ${result}°Celcius`;
    }
}