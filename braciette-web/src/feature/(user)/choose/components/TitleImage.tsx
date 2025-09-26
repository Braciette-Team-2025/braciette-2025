import Image from "next/image";

function TitleImage() {
  return (
    <div className="relative w-[60vw] h-[20vh] md:w-[45vw] md:h-[30vh]">
      <Image
        src="/choose-lkm/title-lkm-page.svg"
        alt="Time to Vote!"
        fill={true}
        objectFit="contain"
      />
    </div>
  );
}

export default TitleImage;
