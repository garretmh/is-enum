# isEnum

Check whether values are members of enums.

## Usage

```ts
import { isEnum, makeIsEnum } from "@garretmh/is-enum";

enum Example {
  Foo,
  Bar,
  Baz,
}

// Check if a value is an enum member
if (isEnum(Examples, someValue)) {
  // someValue: Example
}

// Create a dedicate function for checking enum members
const isExample = makeIsEnum(Example);
if (someArray.every(isExample)) {
  // someArray: Example[]
}
```
