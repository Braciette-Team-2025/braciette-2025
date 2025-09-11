interface ChooseCardProps {
  index: number;
  short: string;
  full: string;
  color: string;
}
function ChooseCard({ short, full, index, color }: ChooseCardProps) {
  const smallColor = index % 2 === 0 ? "pink" : "green";

  return (
    <div
      className={`text-white text-center p-20 rounded-2xl bg-${smallColor} hover:bg-${smallColor}-600 lg:bg-${color} lg:hover:bg-${color}-600 hover:cursor-pointer z-50 w-[490px] h-[272px] flex justify-center items-center flex-col`}
    >
      <h1 className="font-poppins font-bold text-[48px]">{short}</h1>
      <h2 className="font-poppins font-medium text-[24px]">{full}</h2>
    </div>
  );
}

export default ChooseCard;
