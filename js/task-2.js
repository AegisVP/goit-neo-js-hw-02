function formatMessage(message, maxLength) {
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + '...';
  }
  return message;
}

const testTask2 = () => {
  document.getElementById('result').innerHTML = '';

  logOutput(formatMessage, 'Curabitur ligula sapien', 16); // "Curabitur ligula..."
  logOutput(formatMessage, 'Curabitur ligula sapien', 23); // "Curabitur ligula sapien"
  logOutput(formatMessage, 'Vestibulum facilisis purus nec', 20); // "Vestibulum facilisis..."
  logOutput(formatMessage, 'Vestibulum facilisis purus nec', 30); // "Vestibulum facilisis purus nec"
  logOutput(formatMessage, 'Nunc sed turpis a felis in nunc fringilla', 15); // "Nunc sed turpis..."
  logOutput(formatMessage, 'Nunc sed turpis a felis in nunc fringilla', 41); // "Nunc sed turpis a felis in nunc fringilla"
};
