const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476
};

const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921
};

const lithuania = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114
};



/////
const getMyTaxes = function (salary) {
    return this.tax * salary;
}

const calculatedTaxes = getMyTaxes.call(ukraine, 2000);
console.log(calculatedTaxes);



/////
const getMiddleTaxes = function () {
    return this.tax * this.middleSalary;
}

const calculatedMiddleTaxes = getMiddleTaxes.call(ukraine);
console.log(calculatedMiddleTaxes);



/////
const getTotalTaxes = function () {
    return this.tax * this.middleSalary * this.vacancies;
}

const calculatedTotalTaxes = getTotalTaxes.call(ukraine);
console.log(calculatedTotalTaxes);



/////
function random_number(min, max) {
    return Math.random() * (max - min) + min;
  }

const getMySalary = (country) => {
    const salary_number = Math.floor(random_number(1500, 2000));
    const taxes_number = Math.floor(country.tax * salary_number);
    const profit_number = Math.floor(salary_number - taxes_number);
    return { salary: salary_number, taxes: taxes_number, profit: profit_number}; 
}

setInterval(() => {
    const result = getMySalary(latvia);
    console.log(result);
}, 20000);


