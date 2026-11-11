# 🧮 React Calculator

A modern, responsive web calculator engineered with **React**, **Vite**, and **Tailwind CSS**. Designed around an industrial, tactile hardware aesthetic, it features dedicated dual themes (Light & Dark), custom inset shadow layers, overflow safeguards, and comprehensive physical keyboard support.

🌐 **Live Deployment:** [calculator-orcin-ten-79.vercel.app](https://calculator-orcin-ten-79.vercel.app/)

---

## ✨ Features

- **Industrial Hardware UI:** Recreates a tactile, physical desk calculator with custom inset LCD shadows, distinct bezel depths, and mechanical button compression on press.
- **Dual Mode Palette:** Custom Light and Dark color schemes that preserve contrast ratios without washed-out borders or blinding glare.
- **Robust Arithmetic & Edge Cases:**
  - Leading zero locking (`00` prevented; `0.x` handled cleanly).
  - Single decimal constraint (prevents multiple `.` entries in a single operand).
  - Division by zero safety guard (explicit `"Error"` state prevents `Infinity` crashes).
  - Clear entry (`DEL`), full reset (`AC`), and percentage operations (`%`).
  - Result overwrite logic (typing a new number immediately after hitting `=` starts a fresh operation).
- **Responsive Dynamic Display:** Auto-shrinks font sizes (`text-6xl` → `text-4xl` → `text-3xl`) with hidden scrollbars and text-wrapping to prevent long digits or repeating fractions from breaking the chassis.
- **Full Keyboard Navigation:** Global event listener bound to the `window` with automatic cleanup to prevent memory leaks.

---

## ⌨️ Keyboard Shortcuts

| Physical Key | Calculator Action |
| :--- | :--- |
| `0` – `9` | Append digit |
| `.` | Append decimal point |
| `+`, `-`, `/`, `%` | Basic arithmetic operations |
| `*` | Multiply (`X`) |
| `Enter` or `=` | Calculate result (`equal()`) |
| `Backspace` | Delete last entered character (`DEL`) |
| `Escape` | Reset calculator state (`AC`) |

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 (Hooks: `useState`, `useEffect`)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom arbitrary utility classes for multi-stop inset and drop shadows)
- **Deployment:** Vercel

### Core State Schema

```javascript
const [currentNumber, setCurrentNumber] = useState("0"); // Active input / display string
const [previousNumber, setpreviousNumber] = useState(null); // Cached accumulator operand
const [operation, setoperation] = useState(null); // Active arithmetic operator (+, -, X, /, %)
const [overwrite, setoverwrite] = useState(false); // Flag tracking post-evaluation entry
const [theme, settheme] = useState("Dark"); // Active interface theme ("Light" | "Dark")
