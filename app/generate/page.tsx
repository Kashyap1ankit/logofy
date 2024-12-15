import OutputPage from "@/components/native/Generate/output-page";
import PromptPage from "@/components/native/Generate/prompt";

export default function Generate() {
  return (
    <div className=" min-h-screen p-12 flex flex-col md:flex-row  gap-8 ">
      <PromptPage className="w-1/2 p-12 border border-neutral-700 rounded-md" />
      <OutputPage className="w-1/2 p-12 border border-neutral-700 rounded-md" />
    </div>
  );
}
