const fs = require('fs');
const logoBase64 = fs.readFileSync('public/logo.png', { encoding: 'base64' });
const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="black"/>
  <image href="data:image/png;base64,${logoBase64}" x="1" y="1" width="30" height="30" />
</svg>`;
fs.writeFileSync('public/favicon.svg', svgContent);
console.log('SVG Favicon generated successfully with Base64 logo.');
