// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  var i = 0,
    summ = 0,
    ArrayLen = array.length;
  while (i < ArrayLen) {
    summ = summ + array[i++];
  }
  return summ / ArrayLen;
}

var result = average(numbers);
console.log(result);
