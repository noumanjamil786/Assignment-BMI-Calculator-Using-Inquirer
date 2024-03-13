import inquirer from "inquirer";
let weightinKg = await inquirer.prompt({
    name: "Num1",
    type: "number",
    message: "Enter Your weight in kg",
});
let heightinMeters = await inquirer.prompt({
    name: "Num2",
    type: "number",
    message: "Enter Your Height in Meters",
});
let BMI = weightinKg.Num1 / heightinMeters.Num2 * heightinMeters.Num2;
console.log(`Your BMI is ${BMI}`);
