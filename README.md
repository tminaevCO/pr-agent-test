# Wicked Cushion

**Short description of the project**  


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Files Overview](#files-overview)
4. [Best Practices](#best-practices)
5. [Theme Snippets](#theme-snippets)

---

## Installation

Explain how to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/DigitalSuits/wicked-cushions.git

# Navigate to the project folder
cd wicked-cushions

# Install dependencies
yarn Install
```

## Usage

Below is a list of available npm scripts and their purposes. Use these commands to interact with and build the project.

### Development

- **`npm run cli`**  
  Starts the Shopify theme development server using the `dev` environment and the specified `theme` path.

- **`npm run relogin`**  
  Logs out the current Shopify account and restarts the Shopify theme development server.

- **`npm run dev`**  
  Runs the Shopify theme development server and watches for changes in CSS, Tailwind, and JavaScript files.

### Building Styles and Scripts

- **`npm run build:tailwind`**  
  Compiles TailwindCSS from `src/styles/main.css` and outputs a minified file to `theme/assets/tailwind.min.css`.

- **`npm run build:styles`**  
  Runs a custom script (`build-styles.js`) to build additional styles.

- **`npm run build:css`**  
  Runs both the TailwindCSS build and the custom styles build.

- **`npm run build:js`**  
  Bundles JavaScript files using Webpack.

- **`npm run build`**  
  Builds all CSS (TailwindCSS and custom styles) and JavaScript files.

### Watching for Changes

- **`npm run watch:tailwind`**  
  Watches for changes in TailwindCSS files and re-compiles them on-the-fly.

- **`npm run watch:styles`**  
  Watches for changes in `src/styles/**/*.css` and `src/styles/**/*.scss` and triggers the styles build process.

- **`npm run watch:js`**  
  Watches for changes in JavaScript files and re-compiles them using Webpack.

- **`npm run watch`**  
  Runs all watchers concurrently (TailwindCSS, custom styles, and JavaScript).

---

Use these commands as needed for development and production workflows.

## Files Overview

This section provides a brief description of the key files in the project and their purposes.

### Key Files

- **`src/styles/main.css`**  
  The main CSS file used as the entry point for TailwindCSS. This file includes all the base styles and utility classes required for the project.

- **`theme/assets/tailwind.min.css`**  
  The compiled and minified CSS file generated from `main.css` using TailwindCSS. This file is included in the Shopify theme for styling.

- **`build-styles.js`**  
  A custom Node.js script that processes and generates additional styles. Used for compiling styles beyond TailwindCSS configurations.

- **`webpack.config.js`**  
  Configuration file for Webpack, defining how JavaScript files are bundled and processed.

- **`src/styles/**/*.scss`**  
  A collection of SCSS files that contain modular styles for the project. These files are processed and compiled into the themes final CSS output.

- **`shopify.theme.toml`**  
  The configuration file for Shopify themes. It defines theme-specific settings, such as environment details, custom configurations, and paths, used to connect and manage the theme during development.

- **`package.json`**  
  The project’s main configuration file for npm. It lists dependencies, scripts, and other metadata about the project.

- **`tailwind.config.js`**  
  Configuration file for TailwindCSS. It defines custom theme extensions, plugins, and utility configurations.

- **`theme/`**  
  The folder containing the Shopify theme files. Includes assets, templates, and other resources used in the Shopify store.

- **`src/`**  
  The source folder containing the raw development files for styles and JavaScript.

- **`theme/assets/`**  
  The folder where compiled CSS and JavaScript files are output for use in the Shopify theme.

- **`node_modules/`**  
  The directory where all project dependencies installed via npm are stored. (This folder is automatically generated and should not be modified directly.)

- **`.gitignore`**  
  Specifies which files and directories should be ignored by Git. Commonly includes `node_modules/` and build artifacts.

---

This gives a comprehensive overview of the files, helping contributors or users of the project understand the purpose of each one. Let me know if you need more adjustments!

## Best Practices

This section outlines the essential guidelines and templates for working with the theme, including styling rules, JavaScript components, and Liquid section creation.

### Styling Guidelines

Follow these rules for writing styles to maintain consistency and scalability:

1. **Using TailwindCSS classes**  
   - Write TailwindCSS classes directly in the Liquid files as `class` attributes.  
     Example: `<div class="bg-blue-500 text-white p-4"></div>`  

2. **Custom TailwindCSS classes**  
   - If a custom class is needed, define it in `src/styles/main.css`. TailwindCSS features like `@apply`, mixins, and breakpoints can be used here.  
     Example:
     ```css
     .custom-button {
       @apply bg-blue-500 text-white rounded p-2;
     }
     ```

3. **Pure CSS or SCSS for advanced customization**  
   - For styles that cannot or should not use TailwindCSS, write pure CSS or SCSS in a separate file located in the `src/styles/` folder. TailwindCSS utilities will not work here.  
     Example:
     ```scss
     .custom-container {
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: #333;
       color: #fff;
     }
     ```

---

### JavaScript Component Template

Use this basic template for creating reusable web components:

```javascript
if (!customElements.get('my-element')) {
  class MyElement extends HTMLElement {
    constructor() {
      super();
      this.state = {};
      this.selectors = {};
      this.elements = {};
      this.modificators = {};
    }

    connectedCallback() {
      // Code to run when the element is added to the DOM
    }

    disconnectedCallback() {
      // Code to run when the element is removed from the DOM
    }
  }

  customElements.define('my-element', MyElement);
}
```
### Liquid Section Best Practices

Use this template for creating sections:

```liquid
{% liquid
  assign value = section.settings.value
  assign value_second = section.settings.value_second
%}

<div class="">
  <!-- Section content -->
</div>

{% schema %}
{
    "name": "Section Name",
    "class": "section-class",
    "tag": "section",
    "settings": [
        {
            "type": "text",
            "id": "value",
            "label": "Value"
        },
        {
            "type": "text",
            "id": "value_second",
            "label": "Second Value"
        }
    ],
    "blocks": [
        {
            "type": "default",
            "name": "Default Block"
        }
    ],
    "presets": [
        {
            "name": "Default Preset",
            "category": "Category",
            "blocks": []
        }
    ]
}
{% endschema %}
```

## File Rules

Follow these rules for working with specific files to ensure proper functionality, maintainability, and optimization of the theme.

### `theme.liquid`

- **Wrap all content in `{%- capture layout_content -%}`**  
  This ensures that the page's content is captured as a text object (`layout_content`). The captured content can then be passed to snippets or scripts for processing.  
  Example:
  ```liquid
  {%- capture layout_content -%}
    <!-- Page content goes here -->
  {%- endcapture -%}
  ```

### `theme-styles.liquid` 

- **(in the <head> of the page)**  
  This file is used to include styles dynamically. The layout_content object is passed here to check for the existence of specific tags, classes, or web components, ensuring only necessary styles are loaded.
  Example:
  ```liquid
  {% if layout_content contains 'my-component' %}
    /* Include styles for 'my-component' */
  {% endif %}
  ```

### `theme-scripts.liquid` 

- **(at the end of the <body>)**  
  This file is used to include scripts dynamically. The layout_content object is passed to perform checks and include only the necessary scripts.
  Example:
  ```liquid
  {% if layout_content contains 'my-component' %}
    /* Include scripts for 'my-component' */
  {% endif %}
  ```

## Theme Snippets

### Snippet: `title_v2.liquid`

**Description**:  
Renders a responsive and customizable title (e.g., `h1`, `h2`, etc.) with dynamic settings for font size, color, alignment, and visibility.

**Key Features**:
- Supports custom tags (`h1`-`h6`), font sizes, and colors.
- Conditionally loads styles and applies multi-line truncation if needed.
- Allows visibility control for desktop and mobile.

**Usage**:  
Use this snippet to add responsive titles in your Liquid templates.

**Example**:
```liquid
{% render 'title_v2', text: 'Welcome to Our Store', tag: 'h1', color: '#333' %}
```

### Snippet: `richtext_v2.liquid`

**Description**:  
Renders a rich text block with customizable font size, colors, alignment, and visibility. Supports headings, paragraphs, lists, and links, with dynamic truncation and responsive styles.

**Key Features**:
- Fully responsive text styling with support for mobile and desktop-specific settings.
- Conditional visibility for desktop and mobile views.
- Supports rich text elements such as headings, paragraphs, and blockquotes with dynamic truncation (`max_rows`).

**Usage**:  
Use this snippet to add rich, styled text blocks in your Liquid templates.

**Example**:
```liquid
{% render 'richtext_v2', text: 'This is a rich text block.', font_size_scale: 120, max_rows: 3 %}
```

### Snippet: `responsive-image-dynamic_v2.liquid`

**Description**:  
Generates responsive images with optimized `srcset` and `sizes` attributes for both desktop and mobile devices. Automatically adjusts image loading behavior and includes support for image zoom.

**Key Features**:
- Renders a `<picture>` element with separate `<source>` elements for mobile and desktop images.
- Supports lazy loading and high-priority preloading.
- Automatically generates `srcset` and `sizes` attributes for responsive images.

**Usage**:  
Use this snippet to render responsive images in your Liquid templates.

**Example**:
```liquid
{% render 'responsive-image-dynamic_v2', image: image, image_mobile: image_mobile, alt_text: 'Responsive Image', fetchpriority: 'high', sizes: '100vw' %}
```

### Snippet: `product-quantity-selector_v2.liquid`

**Description**:  
Renders a customizable quantity selector for products, with controls for incrementing and decrementing the quantity. Includes accessibility features and styling for seamless integration.

**Key Features**:
- Dynamically adjusts the maximum and minimum values based on product inventory or quantity rules.
- Fully customizable styles with support for placeholder text, borders, and colors.
- Accessibility-friendly with ARIA labels and support for visually hidden text.

**Usage**:  
Use this snippet to include a responsive and functional quantity selector in your product templates.

**Example**:
```liquid
{% render 'product-quantity-selector_v2', product: product, product_form_id: 'ProductForm-1' %}
```

### Snippet: `product-badges_v2.liquid`

**Description**:  
Displays various badges for products, such as "New Arrival," "Discount," "Limited Edition," "Bestseller," "Low Stock," and "Sold Out." Supports dynamic conditions and customizable styles.

**Key Features**:
- Dynamically calculates and displays badges based on product properties like inventory, tags, and settings.
- Supports additional custom badges triggered by specific tags.
- Fully customizable styles for each badge type, including colors, text, and border-radius.

**Usage**:  
Use this snippet to display product badges in your templates.

**Example**:
```liquid
{% render 'product-badges_v2', product: product, limit: 3 %}
```

### Snippet: `product-price_v2.liquid`

**Description**:  
Displays product prices with support for price ranges, discounts, and customizable styles. Handles various currency formats and includes options for taxes and alignment.

**Key Features**:
- Supports price ranges, discounts (`compare_at_price`), and sale prices.
- Configurable currency formats and styles (e.g., font size, color).
- Responsive design with different alignments for desktop and mobile views.
- Optional tax information display.

**Usage**:  
Use this snippet to display product prices dynamically in your templates.

**Example**:
```liquid
{% render 'product-price_v2', product: product, use_variant: true, price_color: '#333' %}
```

### Snippet: `plane-text_v2.liquid`

**Description**:  
Displays a customizable text block with configurable font size, colors, alignment, and visibility. Supports responsive design for desktop and mobile views.

**Key Features**:
- Configurable font size, line height, and text alignment for desktop and mobile.
- Adjustable text colors and maximum width.
- Visibility toggles for desktop and mobile.

**Usage**:  
Use this snippet to display styled text blocks in your templates.

**Example**:
```liquid
{% render 'plane-text', text: 'Sample text', color: '#000', font_size_scale: 120 %}
```

### Snippet: `paragraph_v2.liquid`

**Description**:  
Renders a customizable paragraph block with responsive typography, alignment, and visibility settings. Includes options for truncation and dynamic styling.

**Key Features**:
- Configurable font size, line height, and text alignment for desktop and mobile views.
- Adjustable colors, margins, paddings, and maximum width.
- Supports text truncation with multi-line ellipsis (`max_rows`).
- Visibility toggles for desktop and mobile.

**Usage**:  
Use this snippet to add responsive and customizable paragraphs in your templates.

**Example**:
```liquid
{% render 'paragraph_v2', text: 'This is a sample paragraph.', font_size_scale: 120, max_rows: 3, color: '#333' %}
```

### Snippet: `image_v2.liquid`

**Description**:  
Renders a customizable image block with support for shapes, overlays, and responsive typography. Includes dynamic visibility and styling options for desktop and mobile.

**Key Features**:
- Supports shapes: default (rectangle), circle, and square.
- Includes customizable overlay text with font size, color, and positioning.
- Configurable overlay background color and opacity.
- Responsive design with visibility toggles for desktop and mobile.

**Usage**:  
Use this snippet to display styled image blocks in your templates.

**Example**:
```liquid
{% render 'image_v2', image: image, overlay_title: 'Sample Title', shape: 'circle', overlay_color: '#000', overlay_opacity: 50 %}
```

### Snippet: `button_v2.liquid`

**Description**:  
Renders a customizable button block with styling, animation, and responsive visibility. Integrates with the `button-with-animation_v2` snippet for advanced button functionality.

**Key Features**:
- Configurable button text, link, colors, borders, and radius.
- Supports animations and data attributes for additional interactivity.
- Responsive visibility options for desktop and mobile.
- Includes optional icon support with customizable colors.

**Usage**:  
Use this snippet to add a styled and interactive button in your templates.

**Example**:
```liquid
{% render 'button_v2', 
    text: 'Click Me', 
    link: '/action', 
    type: 'primary', 
    animation: 'fade', 
    text_color: '#fff', 
    background_color: '#007bff', 
    border_radius: 8, 
    visible_on_mobile: true 
%}
```