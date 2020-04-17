# async-functional
The asynchronous generator `AsyncGenerator` appears on many occasions. For example, fetching a set of records from a REST API, or dealing with database records. This package tries to give a *functional* flavor to dealing with such situations. 

# Functional Operators
Inspired by `rxjs` and functional programming, this package gives operators such as `map`, `filter`, `zip`, `take` or `takeWhile` alongwith folds such as `foldl`. Hopefully, this allows programs to be implemented using simple `for` loop.

## Controlled Parallalism
While working with multiple such async generators, this package will try to create a controlled parallalism. 

### Example

```ts
  import {map, of} from 'async-functional';

  // Create a async generator from an array
  const input = of([1, 2, 3, 4, 5]);

  // Use map to square each element
  for await (const i of map(input, x => x * x)) {
    console.log('output = ' + i);
  }

```

