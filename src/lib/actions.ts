export async function copyToClipboard(text: string | null) {
  if (text) {
    await navigator.clipboard.writeText(text);
  }
}
