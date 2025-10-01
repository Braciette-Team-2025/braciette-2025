"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "../styles/Timeline.module.css";
import animate from "@/shared/styles/Animation.module.css";
import { TimelineData } from "../data/timeline_data";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the timeline vertical line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: 0 },
          {
            height: "100%",
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      }

      // Animate each timeline container
      containerRefs.current.forEach((container, index) => {
        if (container) {
          gsap.fromTo(
            container,
            {
              opacity: 0,
              y: -30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                scrub: 1,
              },
            }
          );
        }
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center bg-blue">
      <div className="w-full h-full z-40 bg-blue flex flex-col justify-center items-center px-8 md:px-20 2xl:px-30 py-[20dvh]">
        <div className="relative flex flex-row justify-center items-center gap-24">
          <div className="hidden md:block absolute -left-40 top-0">
            <Image
              src="/landing-page/3arrow.svg"
              alt="Arrows"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1
              className="relative font-yourmate text-green"
              style={{ fontSize: "clamp(56px, 6vw + 1rem, 120px)" }}
            >
              TIMELINE
              <div className="hidden md:block absolute -top-15 -right-45">
                <Image
                  src="/landing-page/timeline-element.svg"
                  alt="Decorative Element"
                  width={200}
                  height={50}
                />
              </div>
            </h1>
            <h2
              className="font-retro text-pink text-[96px] -mt-5 xl:-mt-10"
              style={{ fontSize: "clamp(46px, 5vw, 96px)" }}
            >
              BRACIATE 2025
            </h2>
          </div>
        </div>
        <div ref={timelineRef} className={`${style.timeline}`}>
          <div ref={lineRef} className={style.timelineLine} />
          {TimelineData.map((timeline, index) => (
            <div
              key={timeline.id}
              ref={(el) => (containerRefs.current[index] = el)}
              className={`${style.container} ${
                style[`${timeline.position}Container`]
              }`}
            >
              <div
                className={`w-[50px] h-[50px] rounded-full bg-yellow ${style.balls}`}
              />
              <div className={`${style.textBox}`}>
                <h2 className="font-retro text-4xl text-blue">
                  {timeline.title}
                </h2>
                <small className="font-poppins">{timeline.date}</small>
                <p className="font-poppins mt-4">{timeline.desc}</p>
                <span
                  className={`${style[`${timeline.position}Arrow`]}`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`hidden xl:block w-[20dvw] absolute z-50 top-45 -right-[12%] ${animate.spin}`}
      >
        <Image
          src="/landing-page/flower-pink.svg"
          alt="flower"
          width={240}
          height={240}
          className="w-full h-auto"
        />
      </div>
      <div
        className={`hidden xl:block w-[12dvw] absolute z-50 top-320 -left-[6%] rotate-180 ${animate.spin}`}
      >
        <Image
          src="/landing-page/flower-pink.svg"
          alt="flower"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Timeline;
