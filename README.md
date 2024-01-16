# string-incr

> Increment or decrement string with number

## Install

```
$ npm install --save string-incr
```

## Signature

```typescript
stringIncr(str: string | number, firstAppend?: string | number): string;
stringDecr(str: string | number, firstAppend?: string | number): string;
```

- str: String|Number = '' : The string
- firstAppend: String|Number = ' 2': The append content for the first number (when first parameter don't finish with number)

## Examples

```js
import { stringIncr, stringDecr } from "string-inc";

stringIncr("Hello world 42");
//=> 'Hello world 43'

stringDecr("Hello world 42");
//=> 'Hello world 41'
```

### stringIncr

```js
import { stringIncr } from "string-inc";

stringIncr("Hello world");
//=> 'Hello world 2'

stringIncr("Hello world 2");
//=> 'Hello world 3'

stringIncr("Hello world 42");
//=> 'Hello world 43'
```

### stringDecr

All exemples for stringIncr work for stringDecr

```js
import { stringDecr } from "string-inc";

stringDecr("Hello world");
//=> 'Hello world -1'

stringDecr("Hello world 2");
//=> 'Hello world 1'

stringDecr("Hello world 42");
//=> 'Hello world 41'
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

- 3.0.1 Fix typo in readme
- 3.0.0 Add decrement
- 2.0.0 Typescript support
