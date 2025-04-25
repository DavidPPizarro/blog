export function slugify(str) {
  return str
    .toLowerCase()
    .toLowerCase()
    .replcae(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
