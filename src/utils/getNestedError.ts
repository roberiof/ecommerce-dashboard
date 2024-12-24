import { FieldErrors, FieldValues } from "react-hook-form";

export const getNestedError = <T extends FieldValues>(
  errors: FieldErrors<T>,
  path: string
): string | undefined => {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return keys.reduce((obj, key) => obj?.[key], errors as any)?.message;
};
