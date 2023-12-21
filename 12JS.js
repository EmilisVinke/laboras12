let vardas, pavarde, skaicius1, skaicius2, num, sum;

function getFormData(event) { 
    event.preventDefault();
    
    vardas = document.getElementById("name").value;
    pavarde = document.getElementById("surename").value;
    skaicius1 = document.getElementById("number1").value;
    skaicius2 = document.getElementById("number2").value;
    num = addAndConvertToRoman();
    displayInCconsole();    
    displayInPage();
    numberColor();
}

function displayInPage() {
    document.getElementById("vardas1").innerHTML = "Vartotojo vardas: " + vardas;
    document.getElementById("pavarde1").innerHTML = "Vartotojo pavardė: " + pavarde;
    document.getElementById("skaicius11").innerHTML = "Pirmas skaičius: " + skaicius1;
    document.getElementById("skaicius12").innerHTML = "Antras skaičius: " + skaicius2;
    document.getElementById("sudetasSkaicius").innerHTML = "Sudėtas romėniškas skaičius: ";
    document.getElementById("romSk").innerHTML = num;
}

function displayInCconsole() {
    console.log("Vartotojo vardas: " + vardas);
    console.log("Vartotojo pavardė: " + pavarde);
    console.log("Pirmas skaičius: " + skaicius1);
    console.log("Antras skaičius: " + skaicius2);
    console.log("Sudėtas skaičius: " + num);
}

function addAndConvertToRoman() {
    let sum = parseInt(skaicius1, 10) + parseInt(skaicius2, 10);
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (sum >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            sum -= romanNumerals[i].value;
        }
    }

    return result;
}

function numberColor() {
    let sum = parseInt(skaicius1, 10) + parseInt(skaicius2, 10);
    let romSk = document.getElementById("romSk");

    if (sum <= 7) {
        romSk.style.color = "red";
    } else if (sum > 7 && sum <= 14) {
        romSk.style.color = "orange";
    } else {
        romSk.style.color = "green";
    }
}