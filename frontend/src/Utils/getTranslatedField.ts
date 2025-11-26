// export function getTranslatedField<T, K extends string, L extends string>(
//   obj: T,
//   field: K,
//   lang: L
// ): T extends Record<`${K}_${L}`, infer R> ? R : never {
//   return obj[`${field}_${lang}` as `${K}_${L}`];
// }

export function getTranslatedField<T, K extends string, L extends string>(
  obj: T,
  field: K,
  lang: L
): T extends Record<`${K}_${L}`, infer R> ? R : never {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return obj[`${field}_${lang}` as keyof T] as any;
}
