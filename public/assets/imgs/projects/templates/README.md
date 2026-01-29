# Template Screenshots Directory

This directory contains screenshots for the CodeCanyon templates displayed on the `/sell` page.

## Directory Structure

```
templates/
├── ecommerce/
│   ├── 6valley/
│   │   ├── screenshot-1.png
│   │   ├── screenshot-2.png
│   │   └── screenshot-3.png
│   ├── fleetcart/
│   └── ...
├── restaurant/
│   ├── single-restaurant/
│   └── ...
├── booking/
├── learning/
├── pos-business/
└── real-estate/
```

## How to Add Screenshots

### 1. Capture Screenshots

For each template, capture 3-5 high-quality screenshots showing:
- **Homepage/Landing page** - First impression
- **Key features page** - Main functionality
- **Dashboard/Admin panel** - Backend interface (if applicable)
- **Mobile view** - Responsive design
- **Unique feature** - What makes this template special

### 2. Screenshot Specifications

- **Dimensions**: 1920x1080 or 1200x800 recommended
- **Format**: PNG or JPG
- **File size**: Optimize/compress images (use tools like TinyPNG)
- **Naming**: `screenshot-1.png`, `screenshot-2.png`, etc.

### 3. Capture Process

**From CodeCanyon Product Page:**
1. Visit the product URL (Preview button)
2. Use browser screenshot tools or extensions
3. Capture clean, high-quality images without watermarks
4. Save to the appropriate category folder

**Example:** For "6Valley Multi-vendor Ecommerce"
- Navigate to: https://codecanyon.net/item/.../31448597
- Take 3-5 screenshots of the live demo
- Save as: `ecommerce/6valley/screenshot-1.png`, etc.

### 4. Update the Code

After adding screenshots, update `/app/sell/page.tsx`:

```typescript
{
  id: "6valley",
  name: "6Valley Multi-vendor Ecommerce",
  url: "https://codecanyon.net/...",
  screenshots: [
    "/assets/imgs/templates/ecommerce/6valley/screenshot-1.png",
    "/assets/imgs/templates/ecommerce/6valley/screenshot-2.png",
    "/assets/imgs/templates/ecommerce/6valley/screenshot-3.png"
  ]
}
```

## Current Status

All templates currently have empty `screenshots: []` arrays and show placeholders.

### Priority Templates to Add First

Start with the most marketable templates:

**E-commerce:**
- 6Valley Multi-vendor Ecommerce
- FleetCart Laravel Ecommerce
- Nest Multi-vendor Organic Grocery

**Restaurant:**
- Single Restaurant Food Ordering
- TableTrack SaaS Restaurant Management

**Booking:**
- Carento Car Rental Booking System
- Evento Multi-vendor Event Booking

## Tips for Best Results

1. **Consistency**: Keep similar dimensions across all screenshots
2. **Quality**: Use high-resolution images that showcase the product well
3. **Relevance**: Show the most impressive and marketable features
4. **Optimization**: Compress images to keep page load times fast
5. **Gradual Addition**: Start with top 5 templates, add others over time

## Tools for Screenshot Capture

- **Browser Extensions**: Nimbus Screenshot, Fireshot
- **Mac**: Cmd+Shift+4 (native screenshot)
- **Windows**: Win+Shift+S (Snipping Tool)
- **Full Page Screenshots**: GoFullPage Chrome extension

## Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Online image optimizer
- ImageOptim (Mac) - Desktop compression tool
