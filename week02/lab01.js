//Solution number 1
// const operation = process.argv[2];
// const a = parseFloat(process.argv[3]);
// const b = parseFloat(process.argv[4]);
// let result;
// switch (operation) {
//     case '+':
//         result = a + b;
//         break;
//     case '-':
//         result = a - b;
//         break;
//     case '*':
//         result = a * b;
//         break;
//     case '/':
//         if (b !== 0) {
//             result = a / b;

//         }
//         else {
//             console.log("Cannot devide by zero!");
//             process.exit(1);
//         }
//         break;
//     default:
//         console.log("Invalid operation. Please use: +, -, *, or /");
//         process.exit(1);
// }

// console.log(`Result of ${a} ${operation} ${b} = ${result}`);

//Solution number 2
// To trim first 2 elements
const arg = process.argv.slice(2);

arg[1] = Number(arg[1]);
arg[2] = Number(arg[2]);

switch (arg[0]) {
    case '+':
        console.log(`Result of ${arg[1]} + ${arg[2]} = ${arg[1] + arg[2]}`);
        break;

    case '*':
        console.log(`Result of ${arg[1]} * ${arg[2]} = ${arg[1] * arg[2]}`);
        break;

    case '-':
        console.log(`Result of ${arg[1]} - ${arg[2]} = ${arg[1] - arg[2]}`);
        break;

    case '/':
        if (arg[2] == 0) {
            console.log(
                'cannot be divided by zero!!');
        } else {
            console.log(`Result of ${arg[1]} / ${arg[2]} = ${arg[1] / arg[2]}`);
        }
        break;

    case '%':
        if (arg[2] == 0) {
            console.log(
                'cannot be divided by zero!!');
        } else {
            console.log(`Result of ${arg[1]} % ${arg[2]} = ${arg[1] % arg[2]}`);
        }
        break;

    default: console.log(`operation cannot be performed!!`);
}