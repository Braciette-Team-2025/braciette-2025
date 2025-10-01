import Image from "next/image";
import style from "../styles/Timeline.module.css";
import animate from "@/shared/styles/Animation.module.css";
import { TimelineData } from "../data/timeline_data";

function Timeline() {
  return (
    <section className="relative flex flex-col justify-center items-center bg-blue overflow-x-clip">
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
        <div className={`${style.timeline}`}>
          {TimelineData.map((timeline) => (
            <div
              key={timeline.id}
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
