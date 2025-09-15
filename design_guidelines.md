# InnoVision Career Guidance Platform Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from educational platforms like Coursera and government portals, focusing on trust, professionalism, and accessibility for students navigating career decisions.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary: #2563eb (blue) - trustworthy, professional
- Secondary: #1e40af (darker blue) - depth and authority
- Success: #10b981 (green) - achievement and progress
- Background: #f8fafc (light gray) for main areas
- Card backgrounds: #ffffff with subtle shadows

**Dark Mode:**
- Background: #0f172a (dark slate)
- Card backgrounds: #1e293b
- Text: #f1f5f9

### B. Typography
**Google Fonts:**
- **Primary**: Inter (clean, modern readability)
- **Headings**: Inter Bold/Semibold
- **Body**: Inter Regular (400)
- **Accent**: Inter Medium (500) for CTAs

**Hierarchy:**
- H1: 2.5rem (40px) - Platform title
- H2: 2rem (32px) - Section headers
- H3: 1.5rem (24px) - Card titles
- Body: 1rem (16px) - Standard text
- Small: 0.875rem (14px) - Metadata

### C. Layout System
**Tailwind Spacing Units**: Consistent use of 2, 4, 6, 8, 12, 16
- `p-4, p-6, p-8` for card padding
- `gap-4, gap-6` for grid spacing
- `mb-8, mb-12` for section separation
- `h-16` for navigation height

### D. Component Library

**Navigation:**
- Glass morphism effect with backdrop blur
- Fixed floating design with rounded corners
- Hover states with subtle blue accent
- Mobile hamburger menu with slide animation

**Cards:**
- Clean white backgrounds with subtle shadows
- Rounded corners (rounded-lg)
- Hover elevation effects
- Consistent internal padding (p-6)

**Buttons:**
- Primary: Solid blue (#2563eb) with white text
- Secondary: Outline style with blue border
- "Apply Now" buttons: Green success color
- Rounded corners and proper hover states

**Data Display:**
- Clean tables for college comparisons
- Filter chips with rounded design
- Progress indicators for exam timelines
- Rating stars for college rankings

**Forms:**
- Clean input fields with blue focus states
- Proper spacing and validation states
- Multi-step quiz design with progress bar

**Overlays:**
- Modal dialogs for detailed college information
- Smooth fade-in animations
- Overlay backgrounds with backdrop blur

### E. Visual Hierarchy
- Large hero section with clear value proposition
- Card-based layout for easy scanning
- Consistent spacing between sections
- Strategic use of color to guide attention

## Images Section
**Hero Image**: Large banner showcasing diverse students studying/celebrating success - represents career achievement and educational journey.

**College Images**: Small thumbnail photos for each institution (IIT/NIT/AIIMS campus photos).

**Icon Library**: Heroicons for consistent iconography throughout the platform (graduation cap, building, chart, star icons).

**Background Elements**: Subtle geometric patterns or gradients in hero section to add visual interest without distraction.

## Special Considerations
- **Accessibility**: High contrast ratios, proper focus states
- **Trust Elements**: Official logos, verified badges for authentic data
- **Mobile-First**: Responsive grid system with proper breakpoints
- **Performance**: Optimized images and minimal animations
- **Regional Focus**: Visual elements reflecting Northern India context