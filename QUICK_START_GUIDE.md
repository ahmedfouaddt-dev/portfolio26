# Quick Start Guide: Adding Template Screenshots

## 🚀 Fast Track - Get Your First Template Live in 10 Minutes

### Step 1: Pick a Template (1 min)
Start with: **6Valley Multi-vendor Ecommerce** (most marketable)

### Step 2: Capture Screenshots (5 min)
1. Open: https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597
2. Click "Live Preview" button
3. Take 3-5 screenshots:
   - Homepage (full page)
   - Products page
   - Admin dashboard
   - Mobile view (resize browser or use dev tools)

**Mac**: `Cmd+Shift+4` → Drag to capture
**Windows**: `Win+Shift+S` → Select area

### Step 3: Save Images (1 min)
Save screenshots as:
```
/public/assets/imgs/templates/ecommerce/6valley/screenshot-1.png
/public/assets/imgs/templates/ecommerce/6valley/screenshot-2.png
/public/assets/imgs/templates/ecommerce/6valley/screenshot-3.png
/public/assets/imgs/templates/ecommerce/6valley/screenshot-4.png
/public/assets/imgs/templates/ecommerce/6valley/screenshot-5.png
```

### Step 4: Update Code (2 min)
Open: [app/sell/page.tsx](app/sell/page.tsx)

Find line ~8 (6valley item) and change:
```typescript
screenshots: []
```

To:
```typescript
screenshots: [
  "/assets/imgs/templates/ecommerce/6valley/screenshot-1.png",
  "/assets/imgs/templates/ecommerce/6valley/screenshot-2.png",
  "/assets/imgs/templates/ecommerce/6valley/screenshot-3.png",
  "/assets/imgs/templates/ecommerce/6valley/screenshot-4.png",
  "/assets/imgs/templates/ecommerce/6valley/screenshot-5.png"
]
```

### Step 5: Test (1 min)
```bash
npm run dev
```

Visit: http://localhost:3001/sell

**Done!** Your first template now has a working image carousel.

---

## 📋 Template by Template Checklist

Use this checklist to track your progress:

### E-commerce (Priority: HIGH)
- [ ] 6valley - `ecommerce/6valley/`
- [ ] fleetcart - `ecommerce/fleetcart/`
- [ ] nest - `ecommerce/nest/`
- [ ] eshop - `ecommerce/eshop/`
- [ ] shopperzz - `ecommerce/shopperzz/`
- [ ] 6ammart - `ecommerce/6ammart/`
- [ ] ninico - `ecommerce/ninico/`
- [ ] amazcart - `ecommerce/amazcart/`
- [ ] ishop - `ecommerce/ishop/`
- [ ] martfury - `ecommerce/martfury/`

### Restaurant (Priority: MEDIUM)
- [ ] single-restaurant - `restaurant/single-restaurant/`
- [ ] tabletrack - `restaurant/tabletrack/`
- [ ] restaurant-qr - `restaurant/restaurant-qr/`
- [ ] foodscan - `restaurant/foodscan/`
- [ ] foodigo - `restaurant/foodigo/`
- [ ] businesso - `restaurant/businesso/`
- [ ] bhojon - `restaurant/bhojon/`

### Booking (Priority: MEDIUM)
- [ ] carento - `booking/carento/`
- [ ] evento - `booking/evento/`
- [ ] esalon - `booking/esalon/`
- [ ] carbaz - `booking/carbaz/`
- [ ] 6ammart-car - `booking/6ammart-car/`
- [ ] vrent - `booking/vrent/`

### Learning (Priority: LOW)
- [ ] mentor-lms - `learning/mentor-lms/`
- [ ] skillgro - `learning/skillgro/`

### POS/Business/ERP (Priority: MEDIUM)
- [ ] smart-pos - `pos-business/smart-pos/`
- [ ] delta - `pos-business/delta/`
- [ ] erpgo - `pos-business/erpgo/`
- [ ] paymoney - `pos-business/paymoney/`
- [ ] dentic - `pos-business/dentic/`

### Real Estate/Travel/Others (Priority: LOW)
- [ ] homzen - `real-estate/homzen/`
- [ ] flex-home - `real-estate/flex-home/`
- [ ] rentalspace - `real-estate/rentalspace/`
- [ ] ebook - `real-estate/ebook/`
- [ ] hrmifly - `real-estate/hrmifly/`
- [ ] proforum - `real-estate/proforum/`

---

## 🎯 Recommended Workflow

### Week 1: Top 8 Templates (2 hours total)
Day 1: E-commerce templates (6valley, fleetcart, nest) - 45 min
Day 2: Restaurant templates (single-restaurant, tabletrack) - 30 min
Day 3: Booking templates (carento, evento) - 30 min
Day 4: POS (smart-pos) - 15 min

### Week 2: Remaining Templates (3 hours total)
Complete the rest at your own pace.

---

## 💡 Pro Tips

### Screenshot Quality Matters
- ✅ **Good**: Clean, full-page screenshots showing key features
- ❌ **Bad**: Cropped, blurry, or cluttered images

### Number of Screenshots
- **Minimum**: 3 screenshots per template
- **Ideal**: 5 screenshots per template
- **Maximum**: 7 screenshots (more = slower page load)

### What to Capture
1. **Homepage** (always include)
2. **Main feature/dashboard**
3. **Admin panel** (if available)
4. **Mobile view** (shows responsiveness)
5. **Unique selling point** (what makes it special)

### File Naming
Always use: `screenshot-1.png`, `screenshot-2.png`, etc.
Don't use: `home.png`, `dashboard.png`, or custom names

### Image Optimization
Before adding images, compress them:
- Visit: https://tinypng.com/
- Upload your screenshots
- Download compressed versions
- Replace original files

This keeps your site fast!

---

## 🔧 Troubleshooting

### "Image not showing"
- ✅ Check file path matches exactly (case-sensitive)
- ✅ Verify file is in correct folder
- ✅ Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- ✅ Check dev server is running

### "Page looks broken"
- ✅ Make sure you closed all brackets `]` in screenshots array
- ✅ Run `npm run build` to check for errors

### "Carousel not working"
- ✅ Verify you have at least 2 screenshots (carousel needs multiple images)
- ✅ Check all image paths start with `/assets/imgs/templates/`

---

## 📊 Progress Tracking

**Total Templates**: 38
**Completed**: ___ / 38

**Categories Done**:
- [ ] E-commerce (10 templates)
- [ ] Restaurant (7 templates)
- [ ] Booking (6 templates)
- [ ] Learning (2 templates)
- [ ] POS/Business/ERP (5 templates)
- [ ] Real Estate/Travel/Others (6 templates)

**Estimated Time to Complete All**: 4-6 hours (working solo)

---

## 🎬 Ready to Start?

Open this file in your code editor and start checking off templates as you complete them!

**First template**: 6Valley Multi-vendor Ecommerce
**CodeCanyon URL**: https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597

**Let's go! 🚀**
