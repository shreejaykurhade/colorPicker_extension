const pickColorBtn = document.getElementById("pickColorBtn");
const colorBox = document.getElementById("colorBox");
const hexCodeSpan = document.getElementById("hexCode");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const historyContainer = document.getElementById("history");
const clearBtn = document.getElementById("clearBtn");
const toggleDark = document.getElementById("darkToggle");

// Load and render history
function loadHistory() {
  chrome.storage.local.get("colorHistory", ({ colorHistory = [] }) => {
    historyContainer.innerHTML = "";
    colorHistory.slice().reverse().forEach(color => {
      const div = document.createElement("div");
      div.className = "colorItem";
      div.style.backgroundColor = color;
      div.title = color;
      div.addEventListener("click", () => {
        navigator.clipboard.writeText(color);
      });
      const delBtn = document.createElement("button");
      delBtn.textContent = "×";
      delBtn.className = "deleteBtn";
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeColor(color);
      });
      div.appendChild(delBtn);
      historyContainer.appendChild(div);
    });
  });
}

// Add color to history
function saveColor(color) {
  chrome.storage.local.get("colorHistory", ({ colorHistory = [] }) => {
    colorHistory.push(color);
    if (colorHistory.length > 10) colorHistory.shift(); // Keep only last 10
    chrome.storage.local.set({ colorHistory });
    loadHistory();
  });
}

// Remove a color
function removeColor(color) {
  chrome.storage.local.get("colorHistory", ({ colorHistory = [] }) => {
    const updated = colorHistory.filter(c => c !== color);
    chrome.storage.local.set({ colorHistory: updated });
    loadHistory();
  });
}

// Clear all history
clearBtn.addEventListener("click", () => {
  chrome.storage.local.set({ colorHistory: [] });
  loadHistory();
});

// Pick new color
pickColorBtn.addEventListener("click", async () => {
  try {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();

    colorBox.style.backgroundColor = sRGBHex;
    hexCodeSpan.textContent = sRGBHex;
    result.classList.remove("hidden");

    chrome.storage.local.set({ lastColor: sRGBHex });
    saveColor(sRGBHex);
  } catch (err) {
    console.error("Color picking canceled", err);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexCodeSpan.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy", 2000);
});

// Load last color
chrome.storage.local.get("lastColor", ({ lastColor }) => {
  if (lastColor) {
    colorBox.style.backgroundColor = lastColor;
    hexCodeSpan.textContent = lastColor;
    result.classList.remove("hidden");
  }
});

// Dark Mode Toggle
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  chrome.storage.local.set({ theme: document.body.classList.contains("dark") });
});

chrome.storage.local.get("theme", ({ theme }) => {
  if (theme) document.body.classList.add("dark");
});

loadHistory();
