# Core Values Card Typography & Vertical Spacing Refinement

This update resolves the inconsistent vertical gap between the card heading (`Low Cost`, `Simple`, `Hyperlocal`) and the descriptive paragraph inside the **Our Core Values** section, ensuring uniform, predictable spacing across all three cards at every viewport size.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Root Cause Identified**: Each card's left text column currently uses vertical space distribution (`justify-between` on a stretched flex column) with the badge and heading grouped at the top and the paragraph pushed to the bottom. Because each card's description wraps to a different number of lines (5 lines in "Simple" vs. 6–7 lines in "Low Cost" and "Hyperlocal"), pushing the paragraph to the bottom edge creates an artificial, uneven gap below the heading.

- **Confirmed Approach**: Switch the card text column from bottom-pushed space distribution (`justify-between`) to a natural top-aligned vertical stack (`justify-start`) with a fixed, tight `8px` (`0.5rem`) gap between the heading and paragraph across all cards.

---

## 1. Overview & Core Concept

- **What It Does**: Standardizes the internal vertical rhythm of the three Core Values cards so that the number badge (`01`, `02`, `03`), card title, and body copy maintain identical spacing regardless of paragraph length or card height.
- **Target Audience / Persona**: Gym owners evaluating FitUnified/FitKhata's core principles on desktop, tablet, and mobile screens.
- **Key Value**: Eliminates visual unevenness between adjacent cards in the 3-column row and creates a clean, cohesive editorial flow matching the reference design.

---

## 2. User Experience & Visual Design

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Clean, modern SaaS marketing layout with warm brand accents and balanced card geometry.
  - *Color Palette & Mood*: Warm neutral canvas (`--background`), crisp white card surfaces with subtle `#F0ECE9` borders, and soft pastel number badges (`#FFF0E6` / `#FFEAEA` / `#FFF4E5`).
  - *Typography & Hierarchy*:
    - **Number Badge**: `12px–14px` bold pill with a fixed `12px` (`mt-3`) bottom offset to the heading.
    - **Card Heading**: `20px–22px` bold display heading with a consistent `8px` (`mb-2`) bottom margin directly above the paragraph.
    - **Card Paragraph**: `13.5px–14px` body prose in muted gray (`#6B7280`) with `1.6` (`leading-relaxed`) line height, starting immediately below the heading without extra top margin or flex-stretch pushing.
  - *Component Styling & Layout*:
    - Outer 3-column grid retains equal-height card containers (`items-stretch`) so card borders align cleanly across the row.
    - Inner card layout aligns the left text stack from the top (`self-start` / `justify-start`) while keeping the right-side custom illustration vertically centered (`self-center`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Top-Aligned Text Stack vs. Space-Between Distribution**
  - *Chosen Approach*: Stack the badge, heading, and paragraph sequentially from the top of the card (`flex-col justify-start`), while keeping the outer cards equal height in the CSS Grid.
  - *Why*: In multi-column card grids where descriptions vary in character count, `justify-start` guarantees that the eye reads across a single horizontal baseline for all badges, all headings, and the first line of all paragraphs.Any remaining vertical whitespace rests naturally below the shorter paragraph rather than splitting the heading from its description.
  - *Alternatives Considered*: Forcing equal character counts by truncating text was rejected because it sacrifices meaningful copy; keeping `justify-between` was rejected as it directly causes the inconsistent gap between heading and body text.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Layout Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Our Core Values Section                         │
│           [Gradient Accent Pill] -> [Heading] -> [Subtitle]             │
├─────────────────────────────────────────────────────────────────────────┤
│  3-Column Responsive Grid (items-stretch for equal outer card heights)  │
│                                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────┐  │
│  │ Card 01: Low Cost   │  │ Card 02: Simple     │  │ Card 03: Local  │  │
│  │ ┌─────────┬───────┐ │  │ ┌─────────┬───────┐ │  │ ┌───────┬─────┐ │  │
│  │ │ [01]    │       │ │  │ │ [02]    │       │ │  │ │ [03]  │     │ │  │
│  │ │ ↕ 12px  │       │ │  │ │ ↕ 12px  │       │ │  │ │ ↕12px │     │ │  │
│  │ │ Heading │ Illus │ │  │ │ Heading │ Illus │ │  │ │ Head  │Illus│ │  │
│  │ │ ↕ 8px   │ (Ctr) │ │  │ │ ↕ 8px   │ (Ctr) │ │  │ │ ↕ 8px │(Ctr)│ │  │
│  │ │ Body... │       │ │  │ │ Body... │       │ │  │ │ Body..│     │ │  │
│  │ └─────────┴───────┘ │  │ └─────────┴───────┘ │  │ └───────┴─────┘ │  │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Interactive Component & State Mapping**:
  - Each card preserves its subtle hover elevation (`hover:shadow` and `group-hover:scale-105` on the illustration) and responsive column behavior (`1 col` on mobile, `2 cols` on tablet, `3 cols` on desktop).
