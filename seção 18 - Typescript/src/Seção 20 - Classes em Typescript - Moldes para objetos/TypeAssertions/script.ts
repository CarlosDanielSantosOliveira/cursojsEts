//Servem basicamente para converter um tipo para outro

/* Recomendado */

//Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Non=null assertion (!) = informa que o objeto não vai ser nulo em momento algum.
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

//Type assertion 
const body4 = (document.querySelector('body') as unknown) as number;
body4.style.background = 'red';