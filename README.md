
# forEach

  Iterates an array

## Installation

    $ component install kewah/for-each

## API

```javascript
var forEach = require('for-each');

forEach([1, 2, 3, 4, 5, 6], function(num, index, arr, len) {
  console.log(num);

  if (3 === num) {
    return false;
  }
});

>> 1
>> 2
>> 3
```

## License

  MIT
