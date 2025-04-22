import Image from "next/image";
import Link from "next/link";

const PerfumeCard = ({ perfume }) => {
  return (
    <div className="bg-cream rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-80 w-full group overflow-hidden rounded-lg">
        <Image
          src={perfume.image}
          alt={perfume.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-all duration-500 cursor-pointer group-hover:grayscale"
        />
        <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
      </div>

      <div className="p-4">
        <h3 className="font-playfair text-lg text-midnight">{perfume.name}</h3>
        <p className="text-sm text-rosegold font-montserrat font-medium">{perfume.brand}</p>
        <p className="text-sm text-slate font-poppins mt-1">{perfume.notes.join(", ")}</p>
        <div className="mt-2 text-amber font-semibold">AED {perfume.price}</div>
        <Link
          href={`/perfumes/${perfume.id}`}
          className="block mt-3 text-sm text-midnight hover:text-amber font-montserrat"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PerfumeCard;
