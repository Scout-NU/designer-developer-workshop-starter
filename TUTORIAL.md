# Building a Hero Section from Figma

This tutorial walks you through building a portfolio hero section step-by-step.

---

## The Big Picture

We're building this structure:

```
┌─────────────────────────────────────────────┐
│  Name                    Project Resume ... │  ← Navbar
├─────────────────────────────────────────────┤
│  ┌───────┐                                  │
│  │       │   Hello!                         │
│  │ Image │                                  │
│  │       │   Bio text goes here...          │
│  └───────┘                                  │
│              [Learn more →]                 │  ← Card
└─────────────────────────────────────────────┘
```

---

## Step 0: Understanding the Basics

### What is React?
React lets you build web pages using **components**, reusable pieces of UI. Your entire page is one component that *returns* HTML-like code.

### What is Tailwind CSS?
Instead of writing CSS in a separate file, Tailwind lets you style elements using **class names** directly in your HTML.

```jsx
// Tailwind example:
<h1 className="text-4xl font-bold text-white">Hello!</h1>
//              ↑ size    ↑ weight  ↑ color
```

### What is JSX?
JSX looks like HTML but lives inside JavaScript. Key differences:
- Use `className` instead of `class`
- Close all tags (even `<img />`)
- Wrap everything in one parent element

---

## Step 1: Start with an Empty Page

Open `app/page.tsx` and replace everything with:

```tsx
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  );
}
```

Save the file. Your browser should show "Hello World".

---

## Step 2: Add the Dark Background

Look at your Figma. The page has a dark background. Let's add it:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      Hello World
    </div>
  );
}
```

**What these classes do:**
| Class | What it does |
|-------|--------------|
| `min-h-screen` | Makes the div at least as tall as the screen |
| `bg-zinc-900` | Dark gray background color |

---

## Step 3: Create the Navbar

Add the navigation bar inside your div:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 px-8 py-8">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-8 py-6">
        <span className="text-white text-2xl">Name</span>
        
        <div className="flex gap-8">
          <a href="#" className="text-white text-xl">Project</a>
          <a href="#" className="text-white text-xl">Resume</a>
          <a href="#" className="text-white text-xl">Leisure</a>
        </div>
      </nav>

    </div>
  );
}
```

**New classes explained:**
| Class | What it does |
|-------|--------------|
| `flex` | Arranges children in a row |
| `items-center` | Vertically centers items |
| `justify-between` | Pushes items to opposite ends |
| `max-w-6xl` | Maximum width (so it doesn't stretch too wide) |
| `mx-auto` | Centers the element horizontally |
| `gap-8` | Adds space between flex children |
| `text-white` | White text color |
| `text-2xl` | Large text size |

---

## Step 4: Add the Main Card

Below the navbar, add the light gray card:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 px-8 py-8 flex flex-col items-center">

      {/* NAVBAR */}
      <nav className="w-full max-w-6xl flex items-center justify-between px-8 py-6">
        <span className="text-white text-2xl">Name</span>
        <div className="flex gap-8">
          <a href="#" className="text-white text-xl">Project</a>
          <a href="#" className="text-white text-xl">Resume</a>
          <a href="#" className="text-white text-xl">Leisure</a>
        </div>
      </nav>

      {/* MAIN CARD */}
      <main className="w-full max-w-6xl bg-[#d9d9d9] rounded-3xl">
        Card content goes here
      </main>

    </div>
  );
}
```

**New classes:**
| Class | What it does |
|-------|--------------|
| `flex-col` | Stacks children vertically (navbar, then card) |
| `bg-[#d9d9d9]` | Custom hex color (the `[]` lets you use any value) |
| `rounded-3xl` | Very rounded corners |

---

## Step 5: Build the Hero Section Layout

Inside the main card, create a two-column layout:

```tsx
{/* MAIN CARD */}
<main className="w-full max-w-6xl bg-[#d9d9d9] rounded-3xl">

  {/* HERO SECTION */}
  <section className="flex flex-col md:flex-row gap-12 px-12 py-16">

    {/* LEFT: Image */}
    <div className="w-72 h-96 bg-[#c4c4c4] rounded-2xl">
      Image placeholder
    </div>

    {/* RIGHT: Text content */}
    <div>
      Text goes here
    </div>

  </section>

</main>
```

**New classes:**
| Class | What it does |
|-------|--------------|
| `md:flex-row` | On medium+ screens, arrange side by side |
| `flex-col` | On small screens, stack vertically |
| `w-72` | Fixed width (288px) |
| `h-96` | Fixed height (384px) |
| `px-12 py-16` | Padding inside the section |

---

## Step 6: Add the Text Content

Replace "Text goes here" with the heading, bio, and button:

```tsx
{/* RIGHT: Text content */}
<div className="flex flex-col gap-8">

  {/* Heading */}
  <h1 className="text-black font-bold text-[5rem]">
    Hello!
  </h1>

  {/* Bio */}
  <p className="text-black max-w-lg text-[1.375rem] leading-relaxed">
    This is my portfolio! Write your bio here...
  </p>

  {/* Button */}
  <a
    href="#"
    className="bg-[#5c5c5c] text-white px-8 py-4 rounded-full w-fit"
  >
    Learn more →
  </a>

</div>
```

**New classes:**
| Class | What it does |
|-------|--------------|
| `text-[5rem]` | Custom font size (80px) |
| `leading-relaxed` | More line spacing for readability |
| `rounded-full` | Fully rounded (pill shape) |
| `w-fit` | Width shrinks to fit content |

---

## Step 7: Add Your Image

1. Put your image in the `public/` folder (e.g., `public/my-photo.png`)

2. Replace the image placeholder:

```tsx
{/* LEFT: Image */}
<div className="w-72 h-96 rounded-2xl overflow-hidden">
  <img 
    src="/my-photo.png" 
    alt="Profile" 
    className="w-full h-full object-cover"
  />
</div>
```

**Image classes:**
| Class | What it does |
|-------|--------------|
| `overflow-hidden` | Clips the image to rounded corners |
| `object-cover` | Scales image to fill, cropping if needed |

---

## Step 8: Add Hover Effects (Optional)

Make links interactive:

```tsx
<a href="#" className="text-white text-xl hover:opacity-80">
  Project
</a>
```

Make the button interactive:

```tsx
<a
  href="#"
  className="bg-[#5c5c5c] text-white px-8 py-4 rounded-full w-fit hover:bg-[#4a4a4a] transition-colors"
>
  Learn more →
</a>
```

---

## Complete Code

See the finished version at `app/completed/page.tsx` or visit [localhost:3000/completed](http://localhost:3000/completed).

---

## Quick Reference: Common Tailwind Classes

### Spacing
- `p-4` → padding all sides
- `px-4` → padding left & right
- `py-4` → padding top & bottom
- `m-4` → margin all sides
- `gap-4` → space between flex items

### Colors
- `bg-white` / `bg-black` / `bg-zinc-900`
- `text-white` / `text-black`
- `bg-[#hexcode]` → any custom color

### Layout
- `flex` → flexbox container
- `flex-col` → stack vertically
- `flex-row` → arrange horizontally
- `items-center` → center vertically
- `justify-center` → center horizontally
- `justify-between` → space between

### Sizing
- `w-full` → 100% width
- `h-screen` → 100% viewport height
- `max-w-6xl` → max width constraint

### Typography
- `text-xl`, `text-2xl`, `text-4xl` → font sizes
- `font-bold` → bold weight
- `text-center` → center text

### Borders & Shapes
- `rounded-xl`, `rounded-2xl`, `rounded-full`
- `border` → 1px border

---

## What's Next?

Now that you've built a hero section, try:

1. **Add more sections**: About, Projects, Contact
2. **Make it responsive**: Use `sm:`, `md:`, `lg:` prefixes
3. **Deploy it**: Push to GitHub and deploy on [Vercel](https://vercel.com)

### Resources to Keep Learning

- [Tailwind CSS Docs](https://tailwindcss.com/docs): searchable class reference
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/): visual flexbox explainer
- [Next.js Tutorial](https://nextjs.org/learn): official Next.js course
