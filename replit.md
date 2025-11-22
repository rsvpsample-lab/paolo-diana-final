# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Paolo & Diana, celebrating their wedding on December 18, 2025. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-22**: Complete content overhaul for Paolo & Diana's wedding:
  - Updated all components with new couple names "Paolo & Diana"
  - Changed wedding date to December 18, 2025 at 2:30 PM
  - Updated venues to two separate locations:
    - Ceremony: Sacred Heart of Jesus Parish
    - Reception: Acacia Hotel
  - Updated dress code section with new attire guidelines for multiple groups:
    - Ninang: Long gown in beige
    - Ninong: Long sleeve barong with long sleeve undershirt, black slacks
    - Entourage Female: Long gown in shades of dusty blue
    - Entourage Male: Long sleeve barong with long sleeve undershirt, black slacks
    - Guests Female: Long gown in shades of dusty blue
    - Guests Male: Long sleeve polo in shades of dusty blue OR long sleeve barong with long sleeve undershirt, black slacks
  - Updated color motifs:
    - Beige colors for Ninang: Beige (#D4C5B0), Cream Beige (#E5D7C3)
    - Dusty blue colors for entourage and guests: Dusty Blue (#8B9DC3), Soft Blue (#A3B5D4), Pale Blue (#B8C5D6)
  - Updated wedding timeline with 8 events:
    - 2:00 PM: Arrival
    - 2:30 PM: Ceremony
    - 4:00 PM: Photos
    - 5:00 PM: Grazing
    - 6:00 PM: Reception
    - 7:00 PM: Dinner
    - 8:30 PM: Party
    - 10:00 PM: Send Off
  - Changed wedding hashtag to #PaoloAndDiana2025
  - Updated HTML title and meta description with new couple names and date
  - Updated countdown timer to December 18, 2025 at 2:30 PM
  - Completely rewrote love story section:
    - New story about Diana's service through music and Sun Life, Paolo's family ventures
    - Story of meeting at BLD Singles Encounter retreat
    - Monthly BLD reunions and courtship
    - Traditional courtship with parental blessing
    - Engagement in Hallstatt, Austria
    - Story about shared dreams and vision
  - Comprehensive image update using Cloudinary CDN (djsdvte4u account):
    - Updated favicon/logo to new design
    - Replaced hero section background image
    - Updated love story couple image (prenup4)
    - Added 3 strategic cover images positioned after timeline, after venue, and before entourage
    - Updated venue images: Sacred Heart of Jesus Parish (ceremony) and Acacia Hotel (reception)
    - Redesigned attire guide from 6 cards to 3 large image-based sections (Principal Sponsors, Entourage, Guests)
    - Updated gift section background image (prenup7) and added dual QR codes (Metrobank and GCash)
    - Refreshed prenup photo gallery with 9 new curated images

