(function () {
  const codeElts = document.querySelectorAll("code");

  Array.prototype.forEach.call(codeElts, function escapeCharacters(codeElt) {
    if (typeof codeElt.dataset.dontEscapeCharacters == "undefined") {
      codeElt.innerHTML = codeElt.innerHTML.replace(/</g, "&lt;");
    }
  });
})();
