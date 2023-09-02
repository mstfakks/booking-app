import { Card } from "@/components";
import { bestServices } from "@/constants";

export default function BestService() {
  return (
    <div className="px-80 pb-8">
      <p className="text-center text-[#DF6951] text-lg font-semibold">
        CATEGORY
      </p>
      <p className="text-center text-[#181E4B] text-5xl mt-5 font-bold">
        We Offer Best Services
      </p>

      <div className="mt-5 flex flex-row justify-between">
        {bestServices.map((service) => (
          <Card
            key={service.id}
            cardContent={service.content}
            cardTitle={service.title}
            imgUrl={service.picture}
          />
        ))}
      </div>
    </div>
  );
}
