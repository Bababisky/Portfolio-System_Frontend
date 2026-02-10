# Images Directory

Place your static images here following this structure:

```
public/images/
├── og-image.jpg              # Open Graph image (1200x630)
├── vendors/                  # Vendor logos
│   ├── vercel.svg
│   ├── figma.svg
│   ├── openai.svg
│   └── aws.svg
├── teams/                    # Team avatars
│   ├── frontend.jpg
│   ├── design-system.jpg
│   ├── ai-research.jpg
│   └── brand.jpg
└── experiences/              # Experience images
    ├── ecommerce-hero.jpg
    ├── ecommerce-hero-thumb.jpg
    ├── ecommerce-product.jpg
    ├── ecommerce-product-thumb.jpg
    ├── design-tokens.jpg
    ├── design-tokens-thumb.jpg
    ├── chatbot-ui.jpg
    └── chatbot-ui-thumb.jpg
```

## Image Guidelines

### Formats
- Use WebP for photos (with JPEG fallback)
- Use SVG for logos and icons
- Use PNG for images requiring transparency

### Sizes
- **Hero images**: 1920x1080 (16:9)
- **Thumbnails**: 640x360 (16:9)
- **Team avatars**: 400x400 (1:1)
- **Vendor logos**: SVG (scalable)
- **OG image**: 1200x630

### Optimization
- Compress all images before uploading
- Use tools like ImageOptim, TinyPNG, or Squoosh
- Keep file sizes under 200KB when possible

### Naming
- Use kebab-case: `my-image-name.jpg`
- Include descriptive names
- Add `-thumb` suffix for thumbnails
