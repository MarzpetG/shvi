export function tokenize(input) {
  const stack = [[]]; 
  let currentToken = ""

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === " " || char === "\n" || char === "\t") {

      if (currentToken.length > 0) {
        stack[stack.length - 1].push(parseToken(currentToken));
        currentToken = "";
      }
      continue;
    }

    if (char === "(") {

      stack.push([]);
    } else if (char === ")") {

      if (currentToken.length > 0) {
        stack[stack.length - 1].push(parseToken(currentToken));
        currentToken = "";
      }
      const completedList = stack.pop();
      stack[stack.length - 1].push(completedList);
    } else {
  
      currentToken += char;
    }
  }

 
  if (currentToken.length > 0) {
    stack[stack.length - 1].push(parseToken(currentToken));
  }

  return stack[0]; 
}


function parseToken(token) {
  if (isNumber(token)) {
    return parseFloat(token);
  } else {
    return atom(token);
  }
}


function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}



