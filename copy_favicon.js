const fs = require('fs');
const path = require('path');

const generatedPng = 'C:\\Users\\hider\\.gemini\\antigravity-ide\\brain\\7322b105-05e8-4d9f-bf7a-0a3891758219\\healtox_orange_sparkle_favicon_1784516297102.png';

const targets = [
  path.join(__dirname, 'app', 'icon.png'),
  path.join(__dirname, 'public', 'favicon.png'),
  path.join(__dirname, 'public', 'icon.png'),
];

if (fs.existsSync(generatedPng)) {
  targets.forEach((target) => {
    fs.copyFileSync(generatedPng, target);
    console.log('Copied PNG to:', target);
  });
} else {
  console.error('Generated PNG file not found!');
}

// Create crisp SVG Favicon as SVG vector fallback
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Bright Orange Circle Background -->
  <circle cx="256" cy="256" r="240" fill="#F97316" />
  
  <!-- Central White 4-Point Sparkle Star -->
  <path d="M 256 120 C 256 185, 185 256, 120 256 C 185 256, 256 327, 256 392 C 256 327, 327 256, 392 256 C 327 256, 256 185, 256 120 Z" fill="#FFFFFF" />
  
  <!-- Top-Right Plus/Sparkle -->
  <path d="M 345 160 L 355 160 L 355 150 L 365 150 L 365 160 L 375 160 L 375 170 L 365 170 L 365 180 L 355 180 L 355 170 L 345 170 Z" fill="#FFFFFF" />
  
  <!-- Bottom-Left Diamond Sparkle -->
  <polygon points="170,335 180,345 170,355 160,345" fill="#FFFFFF" />
</svg>`;

const svgTargets = [
  path.join(__dirname, 'app', 'icon.svg'),
  path.join(__dirname, 'public', 'favicon.svg'),
  path.join(__dirname, 'public', 'icon.svg'),
];

svgTargets.forEach((target) => {
  fs.writeFileSync(target, svgContent, 'utf-8');
  console.log('Wrote SVG vector favicon to:', target);
});
