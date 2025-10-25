# Bootstrap 5.3.8 (Vendored)

This directory contains the complete Bootstrap 5.3.8 SCSS source, vendored locally for stability and portability.

## Why Vendored?

Bootstrap is copied here instead of using npm dependencies to ensure:
- **Stability** - Version locked at 5.3.8, won't break with updates
- **Portability** - No `npm install` required to build
- **Reliability** - Guaranteed to work exactly as configured
- **Template-ready** - Perfect for reusable Hugo templates

## Structure

- `scss/` - Complete Bootstrap SCSS source files
- Only the components needed are imported in `assets/sass/bootstrap-custom.scss`

## Updating (If Needed)

If you need to update Bootstrap to a newer version:

```bash
# Install specific version via npm
npm install bootstrap@5.3.x

# Copy new SCSS files
cp -r node_modules/bootstrap/scss assets/vendor/bootstrap/

# Copy new JavaScript
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js static/js/

# Test thoroughly
hugo server -D

# Commit if working
git add assets/vendor/bootstrap static/js/bootstrap.bundle.min.js
git commit -m "Update Bootstrap to [version]"
```

## Current Version

**Bootstrap 5.3.8** - Vendored on 2025-10-25

## License

Bootstrap is released under the MIT License.
Copyright (c) 2011-2024 The Bootstrap Authors
