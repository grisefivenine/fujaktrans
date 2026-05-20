"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 left-6 right-6 z-50 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-xl">
      <h3 className="text-lg font-bold mb-2">
        Cookie beállítások
      </h3>

      <p className="text-gray-400 text-sm">
        Az oldal sütiket használ a működéshez és a felhasználói élmény javításához.
      </p>

      <div className="mt-5 flex gap-3">
        <button
          onClick={acceptCookies}
          className="rounded-xl bg-[#f54d05] px-5 py-3 font-semibold text-black"
        >
          Elfogadom
        </button>

        <button
          onClick={rejectCookies}
          className="rounded-xl border border-white/10 px-5 py-3"
        >
          Elutasítom
        </button>
      </div>
    </div>
  );
}