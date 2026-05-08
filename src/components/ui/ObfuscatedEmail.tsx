"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
}

export function ObfuscatedEmail({
  user = "hello",
  domain = "ionnetix.com",
  className = "text-sm text-gray-300 hover:text-accent transition-colors",
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return <span className={className}>Email Us</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
