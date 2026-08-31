import { heebo } from "@/app/fonts/font";
import { CircleX, X } from "lucide-react";
import toast, { Toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

export function successToast(message: string) {
  toast.custom((t: Toast) => (
    <div className="flex justify-between p-4 rounded-md border bg-gradient-to-r from-green-900 to-green-700 min-w-80 duration-500 shadow-md ">
      <div className="flex gap-2">
        <FaCheckCircle className="text-green-500" />
        <p className={`${heebo.className} text-white font-bold`}>{message}</p>
      </div>

      <X
        className="size-4 text-white cursor-pointer"
        onClick={() => {
          toast.dismiss(t.id);
        }}
      />
    </div>
  ));
}

export function errorToast(message: string) {
  toast.custom((t: Toast) => (
    <div className="flex justify-between items-center p-4 bg-red-700 rounded-lg border shadow-md min-w-80  duration-500">
      <div className="flex gap-2">
        <CircleX className="text-white" />
        <p className="text-white">{message}</p>
      </div>

      <X
        className="size-4 text-white cursor-pointer"
        onClick={() => {
          toast.dismiss(t.id);
        }}
      />
    </div>
  ));
}
