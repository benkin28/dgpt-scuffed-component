document.addEventListener("DOMContentLoaded", function () {
  const tokens = [
    "Hallo",
    "!",
    " Ich",
    " bin",
    " Deutschland",
    "GPT",
    ",",
    " das",
    " sich",
    "ere",
    " Sprach",
    "modell",
    " aus",
    " Deutschland",
    ".",
    " Ich",
    " bin",
    " hier",
    ",",
    " um",
    " Fragen",
    " zu",
    " beant",
    "worten",
    ",",
    " Informationen",
    " zu",
    " lief",
    "ern",
    " und",
    " dir",
    " bei",
    " einer",
    " Viel",
    "zahl",
    " von",
    " Th",
    "emen",
    " zu",
    " assi",
    "stie",
    "ren",
    "!",
  ];

  let typedText = "";
  let tokenIndex = 0;
  const typedTextElement = document.getElementById("typed-text");

  function typeNextToken() {
    if (tokenIndex < tokens.length) {
      typedText += tokens[tokenIndex];
      typedTextElement.textContent = typedText;
      tokenIndex++;
      setTimeout(
        typeNextToken,
        Math.floor(Math.random() * (100 - 75 + 1)) + 75
      );
    }
  }

  typeNextToken();

  const inputMessage = document.getElementById("input-message");
  const sendButton = document.getElementById("send-button");
});
