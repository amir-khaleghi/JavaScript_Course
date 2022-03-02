/* -------------------------------------------------------------------------- */
/*                            Coding Challenge #01 (BMI)                            */
/* -------------------------------------------------------------------------- */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
/* ------------------------------- test data 1 ------------------------------ */
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

/* ------------------------------- test data 2 ------------------------------ */
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

/* --------------------------------- bmi formula -------------------------------- */
const markBMI = markWeight / markHeight ** 2
const johnBMI = johnWeight / johnHeight ** 2

/* ------------------------------ comparing bmi ----------------------------- */
if (markBMI > johnBMI) markHigherBMI1 = true
else markHigherBMI1 = false
/* ----------------------------------- or BETTER WAY ----------------------------------- */
const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI)