import { heebo } from "@/app/fonts/font";
import { galleryExamples as galleryLinks } from "@/lib/constant";
import Image from "next/image";

export default function GalleryComp() {
  return (
    <div className="gap-4 px-4 py-40 md:p-28">
      <p
        className={`${heebo.className} text-3xl sm:text-4xl md:text-5xl text-blue-400 font-bold text-center`}
      >
        Gallery of AI-Generated Logos
      </p>

      <p className="mt-6 text-sm md:text-md text-center text-gray-400 font-bold">
        Explore some of our AI-generated logo designs
      </p>

      <div className="flex flex-wrap justify-center gap-12 mt-24">
        {galleryLinks.map(
          (
            e: {
              prompt: string;
              link: string;
            },
            i: number,
          ) => {
            return (
              <div
                key={i}
                className="group w-[230px] relative h-[220px] cursor-pointer shadow rounded-full "
              >
                <Image
                  alt="img"
                  width={500}
                  height={500}
                  src={e.link}
                  className=" absolute w-full h-fit  group-hover:opacity-40 rounded-full"
                />
                <div>
                  <p className="text-white font-bold p-4 opacity-0  group-hover:opacity-100 translate-y-48 group-hover:translate-y-20 duration-500 text-center">
                    {e.prompt}
                  </p>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
