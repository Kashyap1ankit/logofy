import { heebo } from "@/app/fonts/font";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between gap-8 flex-wrap mx-auto pt-6 md:px-12 ">
      <div className="flex gap-2 items-center">
        <Image
          src={"/greenify.png"}
          width={500}
          height={500}
          className="w-10 rounded-md"
          alt="logo"
          aria-label="logo"
        />
        <p
          className={`text-3xl font-bold ${heebo.className} text-[#285040] tracking-wide`}
        >
          Greenify
        </p>
      </div>

      <div className="flex flex-col gap-2 font-bold">
        <p className="text-lg font-bold text-black">Follow Us On</p>

        <Link
          href={"mailto:kashyap25ankit@gmail.com"}
          className="hover:text-blue-500 flex gap-2 items-center text-sm"
          target="_blank"
        >
          <Mail />
          <p className="text-gray-400 hover:text-blue-500 ">
            @kashyap25ankit@gmail.com
          </p>
        </Link>

        <Link
          href={"https://x.com/kashyap_tweetts"}
          className="hover:text-blue-500 flex gap-2 items-center text-sm"
          target="_blank"
        >
          <Twitter />
          <p className="text-gray-400 hover:text-blue-500 ">@kashyap_tweetts</p>
        </Link>

        <Link
          href={"https://www.linkedin.com/in/ankit-kashyap-coder/"}
          className="hover:text-blue-500 flex gap-2 items-center text-sm"
          target="_blank"
        >
          <Linkedin />
          <p className="text-gray-400 hover:text-blue-500 ">
            @ankit-kashyap-coder
          </p>
        </Link>
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="text-lg font-bold text-black">Legals</p>

        <p className="text-sm text-gray-400 hover:text-black cursor-pointer ">
          Terms & Condition
        </p>

        <p className="text-sm text-gray-400 hover:text-black cursor-pointer">
          Privacy Policy
        </p>

        <p className="text-sm text-gray-400 hover:text-black cursor-pointer">
          Contact Us
        </p>
      </div>
    </div>
  );
}
