function getMinMax(str) {

  const parts = str.split(' ');
  const numbers = [];

  for (const part of parts) {
    let num = Number(part);
    if (!isNaN(num) && isFinite(num)) {
      numbers.push(num);
    }
  }

  const result = numbers.reduce((acc, num) => {
    return {
      min: Math.min(acc.min, num),
      max: Math.max(acc.max, num)
    };
  }, { min: numbers[0], max: numbers[0] });

  return result;

}