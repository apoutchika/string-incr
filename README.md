# string-incr

> Increment string with number

## Install

```
$ npm install --save string-incr
```

## Arguments

- String|Number = '' : The string to increment
- String|Number = ' 2': The append content for the first number (when first parameter don't finish with number)

## Examples

```js
var stringIncr = require("string-inc");

stringIncr("Hello world");
//=> 'Hello world 2'

stringIncr("Hello world 2");
//=> 'Hello world 3'

stringIncr("Hello world 42");
//=> 'Hello world 43'
```

### Only last numbers are incremented

```js
stringIncr("Hello world42");
//=> 'Hello world43'

stringIncr("Hello 42 world99");
//=> 'Hello 42 world100'

stringIncr("Hello-world-42");
//=> 'Hello-world-43'

stringIncr("Hello-world-4242");
//=> 'Hello-world-4243'
```

### Change append text for the first number

```js
stringIncr("Hello world", "-1"); // With string, finish with number
//=> 'Hello world-1'

stringIncr("Hello world", "-2");
//=> 'Hello world-2'

stringIncr("Hello world", 1); // Use only number (auto add space before)
//=> 'Hello world 1'

stringIncr("Hello world", 42);
//=> 'Hello world 42'

stringIncr("Hello world", "#"); // Or use only separator
//=> 'Hello world#2'

stringIncr("Hello world 2", "-2"); // The second parameter is only for the first number !
//=> 'Hello world 3'
```

## Change log

- 2.0.0 Typescript support
