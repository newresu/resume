"use client";
import React, { useState } from "react";
import chevronRight from "./assets/images/chevron-right.svg";
import chevronDown from "./assets/images/chevron-down.svg";


type SectionProps = {
  children: React.ReactNode;
  classNames: string[];
  title: string;
  id?: string;
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
      {" " + title}
      {isFolded ? <img src={chevronDown} height={26} alt="Click to Open Section." /> :<img src={chevronRight} height={26} alt="Click to Close Section." />}
    </h2>
  );

  return (
    <div className={classNames.join(" ")}>
      {h2}
      {isFolded ? null : children}
    </div>
  );
}
