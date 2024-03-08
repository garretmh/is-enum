import { assert, assertFalse } from "jsr:@std/assert";
import { isEnum, makeIsEnum } from "./mod.ts";

enum TestEnum {
  Foo,
  Bar = "bar",
}

Deno.test("isEnum", () => {
  assert(
    isEnum(TestEnum, TestEnum.Foo),
    "isEnum returns true for numeric enum references",
  );
  assert(
    isEnum(TestEnum, 0),
    "isEnum returns true for numeric enum literals",
  );
  assertFalse(
    isEnum(TestEnum, 1),
    "isEnum returns false for other numbers",
  );
  assertFalse(
    isEnum(TestEnum, "Foo"),
    "isEnum returns false for numeric enum keys",
  );
  assert(
    isEnum(TestEnum, TestEnum.Bar),
    "isEnum returns true for string enum references",
  );
  assert(
    isEnum(TestEnum, "bar"),
    "isEnum returns true for string enum literal",
  );
  assertFalse(
    isEnum(TestEnum, "baz"),
    "isEnum returns false for other strings",
  );
  assertFalse(
    isEnum(TestEnum, "Bar"),
    "isEnum returns false for string enum keys",
  );
});

Deno.test("makeIsEnum", () => {
  const isTestEnum = makeIsEnum(TestEnum);
  assert(
    isTestEnum(TestEnum.Foo),
    "isEnum returns true for numeric enum references",
  );
  assert(
    isTestEnum(0),
    "isEnum returns true for numeric enum literals",
  );
  assertFalse(
    isTestEnum(1),
    "isEnum returns false for other numbers",
  );
  assertFalse(
    isTestEnum("Foo"),
    "isEnum returns false for numeric enum keys",
  );
  assert(
    isTestEnum(TestEnum.Bar),
    "isEnum returns true for string enum references",
  );
  assert(
    isTestEnum("bar"),
    "isEnum returns true for string enum literal",
  );
  assertFalse(
    isTestEnum("baz"),
    "isEnum returns false for other strings",
  );
  assertFalse(
    isTestEnum("Bar"),
    "isEnum returns false for string enum keys",
  );
});
