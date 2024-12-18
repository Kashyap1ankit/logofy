"use client";

import { heebo, roboto } from "@/app/fonts/font";
import { SeparatorWithText } from "@/components/ui/separator-new";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, signupType } from "@/lib/validators/auth.validator";
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
import { FaLock, FaAt, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { SignupAction } from "@/app/actions/auth.action";

import { useRouter } from "next/navigation";
import { errorToast, successToast } from "../toast";
import { UserPen } from "lucide-react";

export default function SignUpComp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      email: "",
    },
  });

  async function onSubmit(data: signupType) {
    try {
      setLoading(true);
      const response = await SignupAction(data);

      if (response.status !== 200) throw new Error(response.message);
      successToast(response.message);
      router.push("/signin");
    } catch (error) {
      errorToast((error as Error).message);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen bg-[#121212] backdrop-blur-xl">
      <div className="bg-[#121212] w-11/12 mt-4  md:min-w-[520px]  md:max-w-md  h-fit border border-neutral-800 rounded-xl shadow-xl shadow-black ">
        <div className="flex flex-col gap-8 p-8 rounded-xl bg-black">
          <div>
            <h1
              className={`${heebo.className} text-2xl font-bold  text-center text-white`}
            >
              Create your Account
            </h1>
            <p className="text-center text-gray-400 text-sm mt-2">
              Welcome! Please fill in the detials to get started
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
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`${roboto.className} tracking-wider text-gray-300`}
                      >
                        Display Name
                      </FormLabel>
                      <FormControl>
                        <div className="flex  items-center shadow-sm border border-neutral-700  rounded-lg px-2">
                          <UserPen className="fill-gray-400 size-4 text-gray-400" />
                          <Input
                            placeholder="Vyrat Kohli"
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`${roboto.className} tracking-wider text-gray-300`}
                      >
                        Username
                      </FormLabel>
                      <FormControl>
                        <div className="flex  items-center shadow-sm border border-neutral-700  rounded-lg px-2">
                          <FaAt className="size-4 text-gray-400" />
                          <Input
                            placeholder="greenify_123"
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
                  className="flex gap-2 md:col-span-2 bg-[#9175fd] hover:bg-[#9175fd] items-center"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <FaSpinner />
                  ) : (
                    <>
                      <p
                        className={`${heebo.className} font-bold tracking-wide `}
                      >
                        Submit
                      </p>
                      <IoCaretForwardOutline />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* login part  */}

        <div className="flex gap-2 items-center  justify-center py-4 px-8">
          <p className={`${roboto.className} text-sm text-gray-500`}>
            Already have an account ?
          </p>
          <Link
            href={"/signin"}
            aria-label="signin-redirect"
            className={`${roboto.className} text-sm text-[#9175fd] font-bold`}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
