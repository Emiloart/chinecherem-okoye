"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ContentCarouselProps = {
  title: string;
  items: string[];
  description?: string;
};

export default function ContentCarousel({ title, items, description }: ContentCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>(".carousel-card");
    const gap = 16;
    const distance = firstCard ? firstCard.offsetWidth + gap : track.clientWidth;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <section className="content-carousel" aria-label={title}>
      <div className="carousel-heading">
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${title}`}>
            <ArrowLeft size={17} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${title}`}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="carousel-track" ref={trackRef} tabIndex={0}>
        {items.map((item) => (
          <article className="carousel-card" key={item}>
            <span className="carousel-card-rule" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
