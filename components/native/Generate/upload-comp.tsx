// "use client";
// import React, { useState } from "react";
// import { FileUpload } from "@/components/ui/file-upload";
// import { ScaleLoader } from "react-spinners";
// import WordRotate from "@/components/ui/word-rotate";
// import { generateVideoType } from "@/lib/validators/generate.validator";
// import { UploadVideoAction } from "@/app/actions/upload.action";
// // import { GenerateVideo } from "@/app/actions/generate.action";
// import { errorToast, successToast } from "../toast";

// export default function UploadComp() {
//   const [removedVideSrc, setRemovedVideoSrc] = useState<null | string>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const words = [
//     "Better the video quality, better the green screen results.",
//     "You can process your first video for free! After that, recharge your account to continue.",
//     "Removing the background can take up to 5 minutes depending on the video length and quality.",
//     "Transform your videos into green screen magic with just a single upload!",
//     "Unlock endless possibilities by customizing your video backgrounds effortlessly.",
//   ];

//   async function generateVideo(data: generateVideoType, reset: () => void) {
//     try {
//       setLoading(true);
//       //upload video to cloudinary
//       const res = await UploadVideoAction(data);
//       if (res.status !== 200 || !res.originalFileUrl)
//         throw new Error(res.message);
//       successToast("File Uploaded -- Video generation started");
//       //once got the uploaded file url then generate video
//       const finalRes = await GenerateVideo(res.originalFileUrl);
//       if (finalRes.status !== 200 || !finalRes.output)
//         throw new Error(finalRes.message);
//       setRemovedVideoSrc(finalRes.output);
//     } catch (error) {
//       errorToast((error as Error).message);
//     } finally {
//       reset(); //form resetting
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="flex flex-col gap-16">
//       <FileUpload generateVideo={generateVideo} loading={loading} />

//       <div className="flex justify-center">
//         {loading ? (
//           <div className="flex flex-col items-center gap-4">
//             <ScaleLoader />
//             <WordRotate
//               className="text-sm font-bold  px-4 font-sans mx-4"
//               words={words}
//             />
//           </div>
//         ) : (
//           <>
//             {!!removedVideSrc && (
//               <video
//                 width="80%"
//                 height="240"
//                 controls
//                 className="mx-auto rounded-md duration-500"
//                 preload="metadata"
//               >
//                 <source src={removedVideSrc} type="video/mp4" />
//               </video>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
