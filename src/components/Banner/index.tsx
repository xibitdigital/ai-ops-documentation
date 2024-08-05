import React from "react";
import "./banner.css";
import { Separator } from "../Separator";

export type BannerProps = {
  title: string;
  highlighted_title?: string;
  intro_title?: string;
  intro_paragraph?: string;
};

export const Banner = (props: BannerProps) => (
  <div className="banner">
    <div className="banner__content">
      <h1 className="banner__header">
        <span className="banner__header--red">{props.highlighted_title}</span>
        {props.title}
      </h1>
      <Separator />
      <article className="banner__intro">
        <h2 className="banner__intro_title f2-ns">{props.intro_title}</h2>
        <p className="banner_intro_paragraph">{props.intro_paragraph}</p>
      </article>
    </div>
  </div>
);

export default Banner;
