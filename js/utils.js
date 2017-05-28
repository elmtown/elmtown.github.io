export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function decodeEntities(text) {
  var e = document.createElement('div');
  e.innerHTML = text;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};
