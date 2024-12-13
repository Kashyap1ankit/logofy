import { heebo } from "@/app/fonts/font";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="flex flex-col items-center p-8 gap-2" id="connect">
      <p
        className={`text-3xl md:text-4xl font-bold ${heebo.className} text-[#285040] tracking-wide`}
      >
        Greenify Inc.
      </p>

      <div>
        <p className="text-lg font-bold text-black">Connect with team</p>
        <div className="flex gap-4 mt-2 justify-center">
          <Link
            href={"mailto:kashyap25ankit@gmail.com"}
            className="hover:text-blue-500 "
            target="_blank"
          >
            <IoMdMail className="size-6" />
          </Link>

          <Link
            href={"https://x.com/kashyap_tweetts"}
            className="hover:text-blue-500 "
            target="_blank"
          >
            <FaTwitter className="size-6" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/ankit-kashyap-coder/"}
            className="hover:text-blue-500 "
            target="_blank"
          >
            <IoLogoLinkedin className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
