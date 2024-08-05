import React from "react";
import "./section.css";

type ReactNode =
  | React.ReactChild
  | React.ReactChildren
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;

type SectionProps = {
  children: ReactNode;
  "aria-label"?: string;
};

export const Section = (props: SectionProps) => {
  return (
    <section className="section" aria-label={props["aria-label"]}>
      {props.children}
    </section>
  );
};

export default Section;
