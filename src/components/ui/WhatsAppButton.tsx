"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with actual
  const message = encodeURIComponent("Hi, I want to know more about your services");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
