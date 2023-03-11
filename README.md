# Media Suite

This is just a personal project that I'm making to practise testing, TypeScript, useContext, and other technologies that I wanted to study.

The main goal of the project is to basically be a UI for the FFMPEG library that allows the user to process, edit, and convert files as needed, and for this I used FFmpeg.wasm that basically is a compiled version of the normal FFMPEG library but with the benefit that it can run on the browser.

---

## How to initialize the project

`npm install`

---

## How to run the tests

`npm run test`

---

## How to run the project

`npm run dev`

---

## Other useful commands

-   Lint for checking if the files are all well written, or if the good practices are being followed correctly.
    `npm run lint`

-   Format _ALL_ the files in the project (with the obvious exception of the folders _dist_ and _node modules_)
    `npm run format`

---

## Folder structure

```
├── src
│   ├── assets
│   ├── components
│   │   ├── ComponentName
│   │   │   ├── ComponentName.test.tsx
│   │   │   ├── styles
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   ├── context
│   ├── hooks
│   │   └── useCustomHook
│   │       ├── index.ts
│   │       ├── test.json
│   │       ├── types.ts
│   │       └── useCustomHook.test.ts
│   ├── pages
│   │   └── Page.tsx
```

---

## Project dependencies

[FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) - For processing files
[Material UI](https://material-ui.com/) - As the UI
