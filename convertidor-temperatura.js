function convertTemperature() {
    let celsius;
    
    do {
        celsius = prompt("Ingresa la temperatura en grados Celsius:");
        
        // Intentamos convertir la entrada a número
        celsius = Number(celsius);
        
        if (isNaN(celsius)) {
            alert("Error: Debes ingresar un número válido.");
        }
    } while (isNaN(celsius));
    
    // Realizar las conversiones
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Mostrar resultados en consola
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
    
    // Mostrar resultados en el DOM
    document.body.innerHTML = `<h2>Conversión de Temperatura</h2>
                               <p>Grados Celsius: ${celsius}</p>
                               <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
                               <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>`;
}

convertTemperature();
