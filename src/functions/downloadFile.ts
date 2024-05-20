/**
Download a file

@param {string} filepath - The path to the file to download

*/

export default function downloadFile(filepath: string) {
  try {
    if (!filepath.trim()) {
      throw new Error("Missing filepath");
    }
    const a = document.createElement("a");
    a.href = filepath;
    a.download = filepath.split("/").pop() || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Error downloading file", e);
  }
}
