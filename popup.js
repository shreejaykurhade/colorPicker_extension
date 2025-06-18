const pickColorBtn = document.getElementById("pickColorBtn");
const colorBox = document.getElementById("colorBox");
const hexCodeSpan = document.getElementById("hexCode");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

pickColorBtn.addEventListener("click", async () => {
  try {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();

    colorBox.style.backgroundColor = sRGBHex;
    hexCodeSpan.textContent = sRGBHex;
    result.classList.remove("hidden");

    // Save color to storage
    chrome.storage.local.set({ lastColor: sRGBHex });
  } catch (err) {
    console.error("Color picking canceled or failed", err);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCodeSpan.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 2000);
});

// Load last picked color
chrome.storage.local.get("lastColor", ({ lastColor }) => {
  if (lastColor) {
    colorBox.style.backgroundColor = lastColor;
    hexCodeSpan.textContent = lastColor;
    result.classList.remove("hidden");
  }
});
