"use client";

import { useEffect, useState } from "react";

export default function MyComponent() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/refundpolicy.html")
      .then((res) => res.text())
      .then(setHtml);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}