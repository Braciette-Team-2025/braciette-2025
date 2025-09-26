import Image from "next/image";
import style from "../styles/Box.module.css";

function Sponsorship() {
  const amount: number = 14;
  return (
    <section className="pb-[20dvh] p-10 lg:pl-10 lg:pr-0 lg:pt-0 flex flex-col gap-8 justify-center items-center">
      <h1
        className="font-yourmate text-[120px] text-green z-50 relative text-center"
        style={{ fontSize: "clamp(40px, 5vw, 120px)" }}
      >
        Sponsorship
        <div className="hidden lg:block w-[9dvw] absolute -top-[3.5dvh] xl:-top-[4.5dvh] -right-[8dvw] z-99">
          <Image
            src="/landing-page/timeline-element.svg"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="hidden lg:block w-[9dvw] absolute top-0 -left-[10dvw] z-99">
          <Image
            src="/landing-page/megaphone.svg"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
      </h1>
      <div className={`${style.wrapper}`}>
        <div className={`${style.box}`}>
          <div className="w-full flex justify-center lg:justify-between items-center">
            <p
              className="font-retro text-[60px] shadow-[-8px_8px_0px_purple] border-black border-2 w-max my-10 px-8 rounded-2xl bg-pink text-yellow"
              style={{
                WebkitTextStroke: "1px black",
                fontSize: "clamp(45px, 3vw + 1rem, 60px)",
              }}
            >
              thanks to
            </p>
            <div className="hidden lg:block w-30 h-20 bg-pink rounded-2xl border-2 border-black shadow-[-4px_4px_0px_purple]"></div>
          </div>
          <div className="flex flex-row flex-wrap gap-9 justify-center items-center">
            {Array.from({ length: amount }, (_, index) => (
              <div
                key={index}
                className="w-[30dvw] h-[30dvw] lg:w-[200px] lg:h-[200px] bg-white rounded-2xl border-2 border-black"
              >
                <Image
                  src="/landing-page/org-placeholder.svg"
                  alt="Organization"
                  width={100}
                  height={100}
                  className="w-full h-auto p-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorship;
