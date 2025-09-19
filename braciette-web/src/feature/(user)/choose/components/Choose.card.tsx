interface ChooseCardProps {
  index: number;
  short: string;
  full: string;
  color: string;
}
function ChooseCard({ short, full, index, color }: ChooseCardProps) {
  const smallColor = index % 2 === 1 ? "pink" : "green";

  return (
    <div
      className={`text-white text-center p-20 rounded-2xl bg-${color} hover:bg-${color}-600 hover:cursor-pointer z-50 w-[40dvw] h-[20dvh] md:w-[40dvw] md:h-[40dvh] flex justify-center items-center flex-col`}
    >
      <h1
        className="font-poppins font-bold"
        style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 6rem)" }}
      >
        {short}
      </h1>
      <h2
        className="font-poppins font-medium text-[24px]"
        style={{ fontSize: "clamp(8px, 0.5vw + 1rem, 2rem)" }}
      >
        {full}
      </h2>
    </div>
  );
}

export default ChooseCard;
