import z from "zod";

export const generateVideoSchema = z.object({
  file: z
    .any()
    .refine(
      (val) => {
        // console.log(val);
        if (!val[0]) {
          return false;
        }

        return true;
      },
      {
        message: "Video Must be given",
      },
    )
    .refine(
      (val) => {
        if (val[0]) {
          return val[0].size < 10 * 1024 * 1024; //samller than 10mb
        }
        return false;
      },
      {
        message: "File must be smaller than 10mb",
      },
    ),
});

export type generateVideoType = z.infer<typeof generateVideoSchema>;
