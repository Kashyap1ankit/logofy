"use client";
import cn from "classnames";
import Image from "next/image";

import WordRotate from "@/components/ui/word-rotate";

import { Download, Share } from "lucide-react";
import { roboto } from "@/app/fonts/font";

export default function OutputPage({ className }: { className?: string }) {
  const words = [
    "Better the prompt , better the results",
    "Generating one image can cost you upto $0.12 dollar that mean's you can generate 8 photo's in $1",
    "It can take upto 1 minutes depending on the prompt size",
  ];

  //   const finalOtptUrl = useRecoilValue(fileImageUrlAtom);
  //   const loading = useRecoilValue(generateLoader);
  const loading = true;

  async function handleImageDownload(url: string) {
    const response = await fetch(url);

    if (!response.ok) {
      alert("Failed to download file");
      return;
    }
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "image.svg";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  return (
    <div className={cn(className, "flex flex-col gap-6")}>
      <Image
        src={
          "https://res.cloudinary.com/dw2mbf23e/image/upload/v1734292623/greenify/file_qghgej.svg"
        }
        width={500}
        height={500}
        alt="Output-Image"
        aria-label="output-img"
        className="w-fit h-fit rounded-md "
      />

      <div className="flex gap-8">
        <div
          onClick={() =>
            handleImageDownload(
              "https://res.cloudinary.com/dw2mbf23e/raw/upload/v1734292169/greenify/file_vd9wtm",
            )
          }
          className="flex gap-2 items-center px-4 py-2 rounded-sm bg-violet-600 border border-dashed  border-neutral-700 w-fit text-white cursor-pointer"
        >
          <p className={`${roboto.className}`}>Download</p>
          <Download className="size-4" />
        </div>

        <div className="flex gap-2 items-center px-4 py-2 rounded-sm bg-violet-600 border border-dashed  border-neutral-700 w-fit text-white cursor-pointer">
          <p className={`${roboto.className}`}>Share</p>
          <Share className="size-4" />
        </div>
      </div>

      <div>
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <WordRotate
              className="text-sm text-white font-bold  px-4 font-sans text-left"
              words={words}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
