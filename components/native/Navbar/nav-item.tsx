import { heebo } from "@/app/fonts/font";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";

export default function NavItems() {
  return (
    <div>
      <Button className="py-6 px-8 w-full">
        <FlaskConical />
        <p className={`font-bold ${heebo.className}  tracking-wide `}>
          Try Now
        </p>
      </Button>
    </div>
  );
}
