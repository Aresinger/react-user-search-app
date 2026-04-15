# React User Search App

A small React app that searches users with a responsive UX and safe async handling.

## Live Demo

Coming soon (Vercel/Netlify deploy in progress).

## Features

- Debounced search input (300ms) to reduce unnecessary requests.
- Request cancellation with `AbortController` to prevent race conditions.
- Runtime cache with `useRef` to avoid repeated fetches for the same query.
- UI states for loading, error, and empty results.
- Clean component split (`Form` + `Result`) with lifted search state.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Fetch API

## How It Works

1. The user types in the search input.
2. The query is normalized (`trim().toLowerCase()`) and debounced.
3. If the query is cached, results are returned immediately.
4. Otherwise, a fetch request is started and can be aborted on new input/unmount.
5. The UI renders the correct state: loading, error, empty, or results.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## What I'd Improve Next

- Add tests for async states and cache behavior (React Testing Library + Vitest).
- Improve accessibility with stronger ARIA feedback for loading/error states.
- Add request retry strategy and better user-facing error messages.

## Author

- GitHub: [@Aresinger](https://github.com/Aresinger)
- LinkedIn: add your profile link here
