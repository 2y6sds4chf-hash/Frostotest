# Frostgrave Character Creator PWA

This version extends the original sheet filler into a guided starter-character builder.

## What's new

- step-by-step wizard creation flow
- school chooser with aligned / neutral / opposed relationships
- parchment-style spell cards with starter legality checks
- auto-derived apprentice stats
- warband builder with gold and specialist tracking
- printable preview over the original wizard sheet artwork
- offline support and local browser autosave

## Run locally

```bash
cd frostgrave-pwa
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- In strict starter mode, the app enforces the standard opening build.
- Print uses the browser print dialog; choose **Save as PDF**.
- The original blank wizard sheet is bundled as `assets/template.pdf`.
