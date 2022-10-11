// Completa la función que tomando dos números como argumento devuelva el más alto.

numbers = [12, 32];


function sum(numberOne , numberTwo) {

    if(numberOne >= numberTwo)	{

	return numberOne;
	}
	else
	{
	return numberTwo; 
    }
	
}
const resultado = sum(numbers[0], numbers[1]);
console.log(resultado);
