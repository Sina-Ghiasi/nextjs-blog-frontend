export function toLocaleDate(date: string, locales: string) {
  return new Date(date).toLocaleDateString(locales, {});
}
export function toLocaleTime(date: string, locales: string) {
  return new Date(date).toLocaleTimeString(locales, {});
}
export function toLocaleDateAndTime(date: string, locales: string) {
  return new Date(date)
    .toLocaleString(locales, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", " - ");
}
