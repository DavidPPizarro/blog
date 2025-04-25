export function slugify(str) {
  return str
    .toLowerCase()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date){
  return new Date(date).toLocaleDateString('es-PE', {
    timeZone: 'UTC'
  });
}