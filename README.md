# string-incr

[![Build Status](https://travis-ci.org/apoutchika/string-incr.svg?branch=master)](https://travis-ci.org/apoutchika/string-incr)

> Increment string with number


## install

```
$ npm install --save string-incr
```

## Arguments

* String|Number: The string to increment
* String= ' ': Separator for the first number add

## Examples

```js
var stringIncr = require('string-inc');

stringIncr('Hello world');
//=> 'Hello world 2'

stringIncr('Hello world 2');
//=> 'Hello world 3'

stringIncr('Hello world 42');
//=> 'Hello world 43'
```

### Only last numbers are incremented

```js
stringIncr('Hello world42');
//=> 'Hello world43'

stringIncr('Hello world99');
//=> 'Hello world100'

stringIncr('Hello-world-42');
//=> 'Hello-world-43'

stringIncr('Hello-world-4242');
//=> 'Hello-world-4243'
```

### change separator for the first number

```js
stringIncr('Hello world', '-'); 
//=> 'Hello world-2'

stringIncr('Hello world 2', '-'); // only for the first number !
//=> 'Hello world 3'
```
