const btn = document.getElementById('btn');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.classList.add("transform");
    setTimeout(() => btn.classList.remove("transform"), 300);
    const checkboxes = document.querySelectorAll('input[name="choice"]:checked');
    const values = Array.from(checkboxes).map(cbox => cbox.value);
    console.log(values);
    const act = activities(values);
    console.log(act);

    const numbers = document.querySelectorAll('input[type="number"]');
    const ages = Array.from(numbers).map(num => num.value); 
    const isNeg = ages.filter(age => age < 0);

    const n = numValue(ages);
    console.log(n);

    if (values.length === 0) {
        alert("Veuillez sélectionner au moins une activité.");
    } else if (n === 0 || isNeg.length !== 0) {
        alert("Veuillez indiquer au moins un nombre associé à une tranche d'âge.");
    } else {
        window.location.replace("/thanks.html");
    }
});

const numValue = (ages) => {
    let n = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] !== "") {
            n += Number(ages[i]);
        }
    }
    return n;
};

let arr = [];
let obj = {name: '', number: 0};
let num = 0;
const activities = (values) => {
    for (let i = 0; i < values.length; i++) {
        obj = {name: values[i], number: num + 1};
        if (arr.some(activity => activity.name === values[i])) {
            const activity = arr.find(activity => activity.name === values[i]);
            activity.number += 1;
       } else {
            arr.push(obj);
       }
    }
    return arr;
};