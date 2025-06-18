# 🎨 Chrome Color Picker Extension

A lightweight and modern Chrome extension that lets you pick any color from a webpage using the native Eyedropper API. Stores selected colors in a clean, user-friendly history panel — with features like copy, delete, and dark mode.

< br / > 
![image](https://github.com/user-attachments/assets/64a7c983-a735-411e-a1ce-90ab63b5120f)
< br / > 
## 🚀 Features

- 🖱️ **Pick any color** from any webpage
- 🎯 **Eyedropper API** for native color picking
- 📋 **Copy hex codes** with one click
- 📚 **Color history** (last 10 colors)
- ❌ **Delete** individual colors or clear all
- 🌙 **Dark mode** toggle
- 💾 **Persistent storage** via Chrome local storage

## 🗂️ File Structure

```
color-picker-extension/
├── manifest.json     # Chrome extension metadata
├── popup.html        # Extension UI
├── popup.css         # Styling
├── popup.js          # Main logic
├── icon.png          # Toolbar icon
└── README.md         # You're here!
```

## 🧩 Installation (Unpacked)

1. **Clone or download** this repository
2. Go to `chrome://extensions` in Chrome
3. Enable **Developer Mode** (top right toggle)
4. Click **Load Unpacked**
5. Select the `color-picker-extension` folder
6. Click the extension icon in the toolbar to use!

## 💡 Usage

1. Click the **Color Picker** icon from the Chrome toolbar
2. Click the **"Pick Color"** button in the popup
3. Click anywhere on the screen to capture that color
4. View the **hex code**, **copy**, or view in **history**
5. Toggle **dark mode** from the bottom
6. Use the **Clear All** button to reset your color history

## 🔧 Technical Requirements

### Browser Support
- **Chrome 95+** (Eyedropper API support)
- **Edge 95+** (Chromium-based)
- **Opera 81+** (Chromium-based)

### Permissions
The extension requires the following permissions in `manifest.json`:
```json
{
  "permissions": ["storage"],
  "host_permissions": ["<all_urls>"]
}
```

## 📁 Core Files Explained

### manifest.json
Defines the extension metadata, permissions, and entry points. Key configurations:
- **Manifest V3** for modern Chrome extensions
- **Storage permission** for color history
- **Host permissions** for webpage access

### popup.html
The main UI structure featuring:
- Color picker button
- Current color display
- Color history grid
- Dark mode toggle
- Clear all functionality

### popup.css
Responsive styling with:
- Modern CSS Grid layout
- Dark/light theme variables
- Smooth transitions and hover effects
- Mobile-friendly design

### popup.js
Core functionality including:
- Eyedropper API integration
- Chrome storage management
- Color history management (10 color limit)
- Copy-to-clipboard functionality
- Theme persistence

## 🎨 Color Management

### Storage Format
Colors are stored in Chrome's local storage as:
```javascript
{
  colors: [
    { hex: "#ff0000", timestamp: 1640995200000 },
    { hex: "#00ff00", timestamp: 1640995300000 }
  ],
  theme: "light" // or "dark"
}
```

### History Limitations
- **Maximum 10 colors** stored
- **FIFO system**: Oldest colors removed when limit exceeded
- **Persistent**: Colors survive browser restarts

## 🚀 Development Setup

### Local Development
1. Make changes to any files
2. Go to `chrome://extensions`
3. Click the **refresh icon** on your extension
4. Test changes in the popup

### Debugging
- **Console logs**: Right-click popup → Inspect → Console
- **Storage inspection**: Chrome DevTools → Application tab
- **API testing**: Use browser console to test Eyedropper API

## 🔒 Security Considerations

### Permissions
- **Storage**: Only accesses local extension storage
- **Host permissions**: Required for Eyedropper API across all websites
- **No network requests**: Extension works entirely offline

### Privacy
- **Local storage only**: No data sent to external servers
- **No tracking**: No analytics or user behavior monitoring
- **Minimal permissions**: Only requests necessary permissions

## 🎯 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 95+ | ✅ Full | Native Eyedropper API |
| Edge 95+ | ✅ Full | Chromium-based |
| Firefox | ❌ None | No Eyedropper API support |
| Safari | ❌ None | No Chrome extension support |

## 🛠️ Built With

- **HTML5** - Structure and semantics
- **CSS3** - Modern styling with CSS Grid and variables
- **JavaScript ES6+** - Modern JavaScript features
- **[Eyedropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper)** - Native color picking
- **Chrome Extensions API** - Storage and extension functionality

## 📦 Distribution

### Chrome Web Store (Recommended)
1. Package extension as ZIP file
2. Create Chrome Web Store developer account ($5 fee)
3. Upload and submit for review
4. Users install via Chrome Web Store

### Manual Installation
1. Share the extension folder
2. Users follow "Installation (Unpacked)" steps
3. Extension must be reloaded after Chrome updates

## 🔧 Customization Options

### Modify Color History Limit
In `popup.js`, change the `MAX_COLORS` constant:
```javascript
const MAX_COLORS = 20; // Default: 10
```

### Add New Color Formats
Extend the color display to show RGB, HSL, etc.:
```javascript
function displayColor(hex) {
  // Add RGB conversion
  const rgb = hexToRgb(hex);
  // Update UI with multiple formats
}
```

### Custom Themes
Add new themes by extending the CSS variables in `popup.css`:
```css
[data-theme="blue"] {
  --bg-color: #1e3a8a;
  --text-color: #e0e7ff;
}
```

## 🐛 Troubleshooting

### Common Issues

**Extension not working:**
- Ensure Chrome version 95+
- Check if Developer Mode is enabled
- Reload the extension after code changes

**Eyedropper not opening:**
- Verify the website allows the API
- Check browser console for errors
- Ensure secure context (HTTPS)

**Colors not saving:**
- Check Chrome storage permissions
- Verify storage quota not exceeded
- Clear extension data and retry

## 📃 License

MIT License © 2025

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

