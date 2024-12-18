import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import Link from "next/link";

export default function UserProfile() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <User className="bg-gradient-to-b from-[#764BA2] to-[#667EEA] text-white size-8 p-2 shadow-md  h-fit rounded-full  cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="mx-12 bg-black border border-neutral-700 w-fit px-4 text-sm font-bold text-gray-300">
          <Link href={"/dashboard"}>Dashboard</Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
