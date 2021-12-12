import { regCode } from "./admin.js";

//variables
let repeated;
//funciones
export function random() {
  do {
    let code = parseInt(Math.random() * 999999);
    repeated = repeatedCode(code);
    if (!repeated) {
      regCode.push(code);
      return code;
    } else {
      repeated = false;
    }
  } while (!repeated);
}

function repeatedCode(code) {
  for (let i = 0; i < regCode.length; i++) {
    if (code === regCode[i]) {
      repeated = true;
      break;
    }
  }
  return repeated;
}
