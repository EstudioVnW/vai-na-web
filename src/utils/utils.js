export const phoneMask = value => {
	let number = value
		.replace(/\D/g, '')
		.replace(/^0/, '');

  if (number.length > 10) {
    number = number.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (number.length > 6) {
    number = number.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (number.length > 2) {
    number = number.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else {
    number = number.replace(/^(\d*)/, '($1');
  }

  return number;
}