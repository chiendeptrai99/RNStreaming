export const randomNumberLength = numberlength => {
  var newNumber = '';

  var possible = '1234567890';

  for (var i = 0; i < numberlength; i++) {
    newNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return newNumber;
};

export const randomDisPlayName = () => {
  var symbol = '';
  var exchange = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i < 3; i++) {
    symbol += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  for (var i = 0; i < 3; i++) {
    exchange += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  const displayName = symbol + '.' + exchange;
  return displayName;
};

export const randomObject = obj => {
  var random = '';
  var random = obj[Math.floor(Math.random() * obj.length)];
  return random;
};

export const randomInteger = (a, b) => {
  return Math.floor(Math.random() * (a - b + 1)) + a;
};

export const randomNumber = (a, b) => {
  return Math.random() * (b - a) + a;
};

export const ramdomKeyValue = () => {
  let rand = [
    'order_id',
    'symbol',
    'class',
    'side',
    'fill_status',
    'filled_quantity',
    'order_quantity',
    'limit_price',
    'action_status',
    'order_action',
    'updated',
  ];
  var random = '';
  var random = rand[Math.floor(Math.random() * rand.length)];
  return random;
};
