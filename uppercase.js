function toUppercase(text) {
  if (text === undefined || text === null) return "";
  return text.toString().toUpperCase();
}

// Export för Jest (Node)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { toUppercase };
}

// Gör funktionen global i webbläsaren
if (typeof window !== "undefined") {
  window.toUppercase = toUppercase;
}
