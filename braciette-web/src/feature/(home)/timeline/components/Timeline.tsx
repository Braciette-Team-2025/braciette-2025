import Image from "next/image";
import style from "../styles/Timeline.module.css";

function Timeline() {
  return (
    <section className="flex flex-col justify-center items-center bg-blue">
      <div className="w-full h-full z-40 bg-blue flex flex-col justify-center items-center px-8 md:px-20 2xl:px-30 py-[20dvh]">
        <div className="relative flex flex-row justify-center items-center gap-24">
          <div className="absolute -left-60 top-0">
            <Image
              src="/landing-page/3arrow.svg"
              alt="Arrows"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="relative font-yourmate text-green text-[120px]">
              TIMELINE
              <div className="absolute -top-15 -right-45">
                <Image
                  src="/landing-page/timeline-element.svg"
                  alt="Decorative Element"
                  width={200}
                  height={50}
                />
              </div>
            </h1>
            <h2 className="font-retro text-pink text-[96px] -mt-10">
              BRACIATE 2025
            </h2>
          </div>
        </div>
        <div className={`${style.timeline}`}>
          <div className={`${style.container} ${style.leftContainer}`}>
            <div
              className={`w-[50px] h-[50px] rounded-full bg-white ${style.balls}`}
            />
            <div className={`${style.textBox}`}>
              <h2 className="font-retro text-2xl">UNITED RHTYMS UKM PARADE</h2>
              <small className="font-poppins">10 September 2025</small>
              <p className="font-poppins mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <span className={`${style.arrowLeft}`}></span>
            </div>
          </div>
          <div className={`${style.container} ${style.rightContainer}`}>
            <div
              className={`w-[50px] h-[50px] rounded-full bg-white ${style.balls}`}
            />
            <div className={`${style.textBox}`}>
              <h2 className="font-retro text-2xl">UNITED RHTYMS UKM PARADE</h2>
              <small className="font-poppins">10 September 2025</small>
              <p className="font-poppins mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <span className={`${style.arrowRight}`}></span>
            </div>
          </div>
          <div className={`${style.container} ${style.leftContainer}`}>
            <div
              className={`w-[50px] h-[50px] rounded-full bg-white ${style.balls}`}
            />
            <div className={`${style.textBox}`}>
              <h2 className="font-retro text-2xl">UNITED RHTYMS UKM PARADE</h2>
              <small className="font-poppins">10 September 2025</small>
              <p className="font-poppins mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <span className={`${style.arrowLeft}`}></span>
            </div>
          </div>
          <div className={`${style.container} ${style.rightContainer}`}>
            <div
              className={`w-[50px] h-[50px] rounded-full bg-white ${style.balls}`}
            />
            <div className={`${style.textBox}`}>
              <h2 className="font-retro text-2xl">UNITED RHTYMS UKM PARADE</h2>
              <small className="font-poppins">10 September 2025</small>
              <p className="font-poppins mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <span className={`${style.arrowRight}`}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
