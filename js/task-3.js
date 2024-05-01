function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
    return true;
  }
  return false;
}

const testTask3 = () => {
  document.getElementById('result').innerHTML = '';

  logOutput(checkForSpam, 'Latest technology news'); // false
  logOutput(checkForSpam, 'JavaScript weekly newsletter'); // false
  logOutput(checkForSpam, 'Get best sale offers now!'); // true
  logOutput(checkForSpam, 'Amazing SalE, only tonight!'); // true
  logOutput(checkForSpam, 'Trust me, this is not a spam message'); // true
  logOutput(checkForSpam, 'Get rid of sPaM emails. Our book in on sale!'); // true
  logOutput(checkForSpam, '[SPAM] How to earn fast money?'); // true
};
