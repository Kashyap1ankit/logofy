"use client";
import { lato } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import {
  generateImageInputSchema,
  generateImageInputType,
} from "@/lib/validators/generate.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import cn from "classnames";
import { CornerDownLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GenerateLogo } from "@/app/actions/generate.action";

export default function PromptPage({ className }: { className?: string }) {
  const {
    register,
    formState: { errors },
    reset,
    setValue,
    handleSubmit,
  } = useForm<generateImageInputType>({
    resolver: zodResolver(generateImageInputSchema),
  });

  async function handleImageGenerate(data: generateImageInputType) {
    try {
      const response = await GenerateLogo(data);
      if (response.status !== 200) throw new Error(response.message);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  }
  return (
    <div className={cn(className)}>
      <form
        onSubmit={handleSubmit(handleImageGenerate)}
        className="flex flex-col gap-20 "
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="prompt" className={`${lato.className} text-gray-500`}>
            Prompt <span className="text-red-500">*</span>
          </label>
          <textarea
            className="p-2 rounded-md border outline-0 resize-none no-scrollbar  w-[500px] h-32 bg-secondary-black border-neutral-700 text-white "
            id="prompt"
            {...register("prompt")}
          />

          {errors.prompt && (
            <p className="text-sm font-bold text-red-500">
              {errors.prompt.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="style" className={`${lato.className} text-gray-500`}>
            Style <span className="text-red-500">*</span>
          </label>

          <Select
            {...register("style")}
            onValueChange={(
              value:
                | "any"
                | "engraving"
                | "line_art"
                | "line_circuit"
                | "linocut",
            ) => setValue("style", value)}
          >
            <SelectTrigger className="bg-secondary-black text-white border-0">
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>

            <SelectContent className="bg-primary-black text-white border border-neutral-700">
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="engraving">Engraving</SelectItem>
              <SelectItem value="line_art">Line_art</SelectItem>
              <SelectItem value="line_circuit">Line_circuit</SelectItem>
              <SelectItem value="linocut">Linocut</SelectItem>
            </SelectContent>
          </Select>

          {errors.style && (
            <p className="text-sm font-bold text-red-500">
              {errors.style.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            className={`${lato.className} bg-violet-600  hover:bg-violet-600 rounded-sm p-2 min-w-20 font-bold w-fit `}
          >
            <p>Run</p>
            <CornerDownLeft />
          </Button>
        </div>
      </form>
    </div>
  );
}
