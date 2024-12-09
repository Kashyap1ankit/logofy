import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Make it little longer" })
    .max(15, { message: "Keep it shorter" }),
  username: z
    .string({
      message: "Username is required",
    })
    .min(3, { message: "Use atleast 3 character" })
    .max(10, { message: "Try to keep it smaller" }),
  password: z
    .string({
      message: "Password is required",
    })
    .min(3, { message: "Make it longer" })
    .max(10, { message: "Keep it shorter" })
    .regex(new RegExp(/.*[!@#$%^&*(),.?":{}|<>].*/), {
      message: "Must have one special symbol",
    })
    .regex(new RegExp(/.*[0-9].*/), {
      message: "Must have one number",
    }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
});

export const signinSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({
      message: "Password is required",
    })
    .min(3, { message: "Make it longer" })
    .max(10, { message: "Keep it shorter" })
    .regex(new RegExp(/.*[!@#$%^&*(),.?":{}|<>].*/), {
      message: "Must have one special symbol",
    })
    .regex(new RegExp(/.*[0-9].*/), {
      message: "Must have one number",
    }),
});

export type signupType = z.infer<typeof signupSchema>;
export type signinType = z.infer<typeof signinSchema>;
