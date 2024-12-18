"use client";

import { heebo, roboto } from "@/app/fonts/font";
import { SeparatorWithText } from "@/components/ui/separator-new";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, signinType } from "@/lib/validators/auth.validator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoEye, IoCaretForwardOutline } from "react-icons/io5";
import { IoMdEyeOff, IoIosMailUnread } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { errorToast, successToast } from "../toast";

export default function SignInComp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: signinType) {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (response?.error) throw new Error("Credential Mismatched");

      successToast("Successfully Logged In");
      router.push("/");
    } catch (error) {
      errorToast((error as Error).message);
      form.reset();
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen  bg-[#121212] backdrop-blur-xl">
      <div className="bg-[#121212]  w-11/12 mt-4  md:max-w-md md:min-w-[520px] h-fit border border-neutral-700 rounded-xl shadow-xl ">
        <div className="flex flex-col gap-8 bg-black p-8 rounded-xl">
          <div>
            <h1
              className={`${heebo.className} text-2xl font-bold  text-center text-white `}
            >
              Sign in to Greenify
            </h1>
            <p className="text-center text-gray-400 text-sm mt-2">
              Welcome back! Please sign in to continue
            </p>
          </div>

          <div
            className="py-2 px-4 flex items-center gap-2 border-2 rounded-lg justify-center bg-white shadow-sm cursor-pointer"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FcGoogle className="size-6" />
            <p className={`${roboto.className} font-bold`}>Google</p>
          </div>

          <SeparatorWithText
            text="or"
            lineClassName="border-dashed border-gray-400"
          />

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`${roboto.className} tracking-wider text-gray-300`}
                      >
                        Email
                      </FormLabel>
                      <FormControl>
                        <div className="flex  items-center shadow-sm border border-neutral-700  rounded-lg px-2">
                          <IoIosMailUnread className="size-6 text-gray-400" />
                          <Input
                            placeholder="virat@greenify.com"
                            {...field}
                            className="outline-0 border-none focus-none shadow-none text-white"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`${roboto.className} tracking-wider text-gray-300`}
                      >
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="flex  items-center shadow-sm border border-neutral-700  rounded-lg px-2">
                          <FaLock className="size-4 text-gray-400" />
                          <Input
                            placeholder="Hello@1"
                            {...field}
                            className="outline-0 border-none focus-none shadow-none text-white"
                            type={passwordVisible ? "text" : "password"}
                          />
                          {passwordVisible ? (
                            <IoEye
                              onClick={() => setPasswordVisible(false)}
                              className="text-gray-400 cursor-pointer"
                            />
                          ) : (
                            <IoMdEyeOff
                              onClick={() => setPasswordVisible(true)}
                              className="text-gray-400 cursor-pointer"
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="flex gap-2  bg-[#9175fd] hover:bg-[#9175fd] items-center"
                  type="submit"
                >
                  <p className={`${heebo.className} font-bold tracking-wide `}>
                    Submit
                  </p>
                  <IoCaretForwardOutline />
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* login part  */}

        <div className="flex gap-2 items-center  justify-center py-4 px-8">
          <p className={`${roboto.className} text-sm text-gray-500`}>
            Don&apos;t have an account ?
          </p>
          <Link
            href={"/signup"}
            aria-label="signin-redirect"
            className={`${roboto.className} text-sm text-[#9175fd] font-bold`}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
