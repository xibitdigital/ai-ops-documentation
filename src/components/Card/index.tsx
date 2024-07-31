import React from 'react';
import "./card.css";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <figure className="card">
        <figcaption className="card__content">
            <div className="card__line" />
            <p className="card__paragraph">{children}</p>
        </figcaption>
  </figure>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card__content">{children}</div>;
}
