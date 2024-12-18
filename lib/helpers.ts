import { successToast } from "@/components/native/toast";

export async function handleImageDownload(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    alert("Failed to download file");
    return;
  }
  const blob = await response.blob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = url.slice(-10);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export async function handleClipBoardCopy(text: string) {
  await navigator.clipboard.writeText(text);
  successToast("Prompt Copied");
}
