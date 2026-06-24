<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 👑 Ten — Portfolio

A minimal dark personal portfolio with vertical sidebar navigation, smooth page transitions, and a full light/dark mode toggle. No frameworks, no installs — just open and make it yours.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

* 🧭 **Vertical Sidebar Navigation** — Slim fixed sidebar with icon-only nav buttons that reveal labels on hover; collapses to a hamburger drawer on mobile
* 🔄 **Smooth Page Transitions** — Sections fade and slide in independently with staggered letter-by-letter page title reveals
* 🌗 **Light / Dark Mode** — Swaps the entire palette via CSS custom properties with a single button click
* 🃏 **Project Grid** — Tech-tagged project cards with GitHub and external link shortcuts per card
* ⚙️ **Services Section** — Three floating service cards with a circular icon header and hover scale effect
* 📬 **Contact Form** — Split layout with a styled form, animated active field indicator, and a social links row
* 🎭 **Randomized Hero Icons** — Background decorative icons rotate through a random SVG set each time the home section is visited
* 📱 **Fully Responsive** — Sidebar collapses to an overlay drawer on mobile, layout reflows cleanly at every breakpoint

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Zeddy-Forreal/ten-portfolio.git
cd ten-portfolio
```

**2. Open in browser**

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**3. Make it yours**

Swap out the name, bio, project cards, and service descriptions directly in `index.html`. All colors live in one place in `style/main.css`.

---

## 📁 File Structure

```
ten-portfolio/
├── index.html            All markup and content
├── script/
│   └── main.js             Navigation, transitions, theme toggle, and form logic
└── style/
    ├── main.css            Global tokens, sidebar, layout, and shared components
    ├── home.css            Hero section styles
    ├── services.css        Services card layout
    ├── projects.css        Project grid and tech tag colors
    ├── contacts.css        Contact form and social links
    └── about.css           About section styles
```

---

## ⚙️ How It Works

Page switching is handled by toggling an `.active` class on both the nav button and the matching section — no router, no framework:

```javascript
page_buttons.forEach((elem, ind) => {
    elem.onclick = () => {
        Dactivate(page_buttons, elem);
        Dactivate(pages, pages[ind]);
    };
});
```

The theme toggle swaps 12 CSS custom properties at once, covering backgrounds, text, shadows, and accent colors:

```javascript
function change_colors(arr) {
    document.documentElement.style.setProperty("--body", arr[0]);
    document.documentElement.style.setProperty("--color1", arr[1]);
    // ... and so on for all 12 tokens
}
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`:

```css
:root {
  --body:       #F6EDE3;   /* Page background          */
  --color1:     #353535;   /* Sidebar background        */
  --color2:     #d3c8bb;   /* Dividers / borders        */
  --color3:     #6f68ad;   /* Card / section background */
  --dark_text:  #473e31;   /* Primary text              */
  --light_text: #e8dbff;   /* Text on dark surfaces     */
  --main_color: #ffc557;   /* Accent color              */
  --home:       #272727;   /* Hero background           */
}
```

Tech tag colors in `projects.css` are set per-language via class names — add new ones by following the same pattern.

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
