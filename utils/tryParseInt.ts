export function tryParseInt(number?: string) {
  if (!number) return undefined;
  const parsed = parseInt(number);
  if (isNaN(parsed)) return undefined;
  return parsed;
}
