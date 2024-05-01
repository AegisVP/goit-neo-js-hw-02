const shipping = [
  { country: 'China', price: 100 },
  { country: 'Chile', price: 250 },
  { country: 'Australia', price: 170 },
  { country: 'Jamaica', price: 120 },
];

function getShippingCost(country) {
  const shipMethod = shipping.find(({ country: name }) => name === country);

  return shipMethod ? `Shipping to ${country} will cost ${shipMethod.price} credits` : `Sorry, there is no delivery to your country`;
}

const testTask4 = () => {
  document.getElementById('result').innerHTML = '';

  logOutput(getShippingCost, 'Australia'); // "Shipping to Australia will cost 170 credits"
  logOutput(getShippingCost, 'Germany'); // "Sorry, there is no delivery to your country"
  logOutput(getShippingCost, 'China'); // "Shipping to China will cost 100 credits"
  logOutput(getShippingCost, 'Chile'); // "Shipping to Chile will cost 250 credits"
  logOutput(getShippingCost, 'Jamaica'); // "Shipping to Jamaica will cost 120 credits"
  logOutput(getShippingCost, 'Sweden'); // "Sorry, there is no delivery to your country"
};
