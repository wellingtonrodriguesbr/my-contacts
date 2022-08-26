export function phoneFormatter(phone: string) {
  phone = phone.replace(/[^\d]/g, ""); //remove all non digits
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
}
