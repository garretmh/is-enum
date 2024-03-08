/** Whether a value is a member of an enum. */
export function isEnum<T extends string | number>(
  EnumType: Record<string, T>,
  value: string | number,
): value is T {
  return (
    Object.values<string | number>(EnumType).includes(value) &&
    // Guard against numeric enum reverse-lookups
    typeof EnumType[value] !== "number"
  );
}

/** Make a function to check whether a value is a member of an enum. */
export function makeIsEnum<T extends string | number>(
  EnumType: Record<string, T>,
): (value: string | number) => value is T {
  const enumValues = Object.values<string | number>(EnumType);
  return (value: string | number): value is T => (
    enumValues.includes(value) &&
    // Guard against numeric enum reverse-lookups
    typeof EnumType[value] !== "number"
  );
}
