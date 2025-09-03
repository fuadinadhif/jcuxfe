"use client";

// useEffect hook kita pakai untuk melakukan sinkronisasi komponen react dengan data eksternal
// useEffect(callback_function, array_dependecy)
// callback_function -> sebuah fungsi yang akan dijalankan ketika effectnya active/berjalan
// array_dependecy -> sebuah array yang bisa diisi dengan berbagai state

import { useEffect, useState } from "react";

export default function UseEffect() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const yPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progressBar = (yPosition / documentHeight) * 100;
      setProgress(progressBar);
    });
  }, []);

  return (
    <main className="h-[1000vh]">
      <div
        className="fixed h-2 inset-0 bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
      <h1>Use Effect Hook</h1>
    </main>
  );
}
