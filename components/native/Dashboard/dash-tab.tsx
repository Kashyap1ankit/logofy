"use client";
import { getUserHistory } from "@/app/actions/transaction.action";
import { lato } from "@/app/fonts/font";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { handleClipBoardCopy, handleImageDownload } from "@/lib/helpers";
import { useUserHistory } from "@/lib/hooks/hooks";
import { Copy, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
export default function DashBoardTable() {
  const userData = useUserHistory((state) => state.data);
  const setUserData = useUserHistory((state) => state.setData);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await getUserHistory();
        console.log(res);
        if (res.status !== 200 || !res.data) throw new Error(res.message);
        setUserData(res.data);
      } catch {
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [setUserData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center  h-screen text-gray-400">
        <ScaleLoader color={"#8b5cf6"} />
      </div>
    );
  }
  return (
    <div>
      {userData ? (
        <Table className="mx-auto mt-12 rounded-md w-11/12 md:max-w-5xl bg-[#0E1728] ">
          <TableCaption>A list of your recent runs.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#374151] hover:bg-[#374151] rounded-md text-md font-bold">
              <TableHead
                className={`${lato.className} text-white font-bold rounded-tl-md`}
              >
                Created At
              </TableHead>
              <TableHead className={`${lato.className} text-white font-bold `}>
                Prompt
              </TableHead>
              <TableHead className={`${lato.className} text-white font-bold `}>
                Result
              </TableHead>

              <TableHead
                className={`${lato.className} text-white font-bold rounded-tr-md `}
              >
                Download
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white p-4  ">
            {userData.map((e, i) => {
              return (
                <TableRow key={i} className="hover:bg-[#0E1728] ">
                  <TableCell className="font-medium">
                    {e.createdAt.toLocaleDateString()}
                  </TableCell>

                  <TableCell className="flex gap-2 items-center mt-2">
                    <p>{e.prompt.slice(0, 20)}....</p>
                    <Copy
                      className="size-4 opacity-40 active:opacity-100 active:text-green-500 duration-300 cursor-pointer"
                      onClick={() => handleClipBoardCopy(e.prompt)}
                    />
                  </TableCell>

                  <TableCell>
                    <Image
                      src={e.final}
                      width={500}
                      height={500}
                      alt="Output-Image"
                      aria-label="output-img"
                      className="w-10  h-10  rounded-full "
                    />
                  </TableCell>
                  <TableCell>
                    <Download
                      className="size-4  cursor-pointer"
                      onClick={() => handleImageDownload(e.final)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className="flex justify-center items-center  h-screen text-gray-400">
          <p>No Data</p>
        </div>
      )}
    </div>
  );
}
