export const clickReceipt = (url: string) => {
  window.open(url)
}

export const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    handleCopyClipBoard(text)
  }
}