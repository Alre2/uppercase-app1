function toUppercase(text) {
  // Undvik ?? för maximal kompatibilitet med äldre Node-versioner
  const s = (text === undefined || text === null) ? "" : String(text);
  return s.toUpperCase();
}

// Export för Jest/Node
module.exports = { toUppercase };

// Tillgänglig i webbläsaren
if (typeof window !== "undefined") {
  window.toUppercase = toUppercase;
}
