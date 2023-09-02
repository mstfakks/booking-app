import Image from "next/image";

interface CardContentProps {
  imgUrl: string;
  cardTitle: string;
  cardContent: string;
}

export default function Card({
  imgUrl,
  cardTitle,
  cardContent,
}: CardContentProps) {
  return (
    <div className="shadow-xl rounded-3xl max-w-[267px] max-h-[314px] p-9 bg-white inline-flex flex-col justify-center items-center">
      <div>
        <Image src={imgUrl} width={92} height={92} alt="plane" />
      </div>
      <p className="text-center mt-6 text-[#1E1D4C] text-xl font-semibold">
        {cardTitle}
      </p>
      <p className="text-center text-[#5E6282] text-base font-medium mt-3 ">
        {cardContent}
      </p>
    </div>
  );
}
