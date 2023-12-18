export const clickURL = (url: string) => {
  window.open(url)
}

export const no = () => {
  return null
}

export const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    handleCopyClipBoard(text)
  }
}