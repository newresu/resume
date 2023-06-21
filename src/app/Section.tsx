"use client";
import React, { useState } from "react";

type SectionProps = {
  children: React.ReactNode;
  classNames: string[];
  title: string;
};
export function Section({ title, children, classNames }: SectionProps) {
  const [isFolded, setIsFolded] = useState(true);

  function handleFold() {
    setIsFolded(!isFolded);
  }
  const h2 = (
    <h2
      onClick={handleFold}
      id={`${title.toLowerCase()}_title`}
      style={{ cursor: "pointer" }}
    >
      {title}
      {isFolded ? "›" : "⌄"}
    </h2>
  );

  return (
    <div className={classNames.join(" ")}>
      {h2}
      {isFolded ? null : children}
    </div>
  );
}
