function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  }
  return `You ordered ${quantity} droid${quantity > 1 ? 's' : ''} worth ${totalPrice} credits!`;
}

const testTask1 = () => {
  document.getElementById('result').innerHTML = '';

  logOutput(makeTransaction, 5, 3000, 23000); // "You ordered 5 droids worth 15000 credits!"
  logOutput(makeTransaction, 3, 1000, 15000); // "You ordered 3 droids worth 3000 credits!"
  logOutput(makeTransaction, 10, 5000, 8000); // "Insufficient funds!"
  logOutput(makeTransaction, 8, 2000, 10000); // "Insufficient funds!"
  logOutput(makeTransaction, 10, 500, 5000); // "You ordered 10 droids worth 5000 credits!"
};
