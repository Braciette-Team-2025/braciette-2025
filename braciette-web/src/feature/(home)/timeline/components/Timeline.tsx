import Image from "next/image";
import style from "../styles/Timeline.module.css";
import { title } from "process";

function Timeline() {
  const timelines: Array<{
    id: number;
    title: string;
    date: string;
    desc: string;
    position: string;
  }> = [
    {
      id: 1,
      title: "United Rhythm UKM Parade",
      date: "10 September 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "left",
    },
    {
      id: 2,
      title: "United Rhythm UKM Parade",
      date: "10 September 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "right",
    },
    {
      id: 3,
      title: "United Rhythm UKM Parade",
      date: "10 September 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "left",
    },
    {
      id: 4,
      title: "United Rhythm UKM Parade",
      date: "10 September 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "right",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center bg-blue">
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
          {timelines.map((timeline) => (
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
    </section>
  );
}

export default Timeline;
