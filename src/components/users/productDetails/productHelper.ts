export const removeTags = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text: string | null = doc.body.textContent;
  const t = text?.split(" ").slice(0, 22);
  const result = t?.join(" ");
  return result || "";
};
export function getRatingRoundFigure(number: number) {
  const integerPart = Math.floor(number);
  const decimalPart = number - integerPart;

  if (decimalPart === 0.5) {
    return number;
  }
  return integerPart;
}
export function getTime(timestamp: string) {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDate = `${formattedHours}:${formattedMinutes} ${period}, ${date.toLocaleDateString()}`;

  return formattedDate;
}

export const startString =
  "M15.7122 0.726287C15.6121 0.509458 15.4521 0.325825 15.2509 0.197113C15.0498 0.0684022 14.816 0 14.5772 0C14.3384 0 14.1046 0.0684022 13.9034 0.197113C13.7023 0.325825 13.5422 0.509458 13.4422 0.726287L9.85468 8.50129L1.35343 9.51004C1.11624 9.53804 0.89204 9.63341 0.707363 9.78486C0.522685 9.93631 0.385261 10.1375 0.311354 10.3646C0.237447 10.5917 0.230152 10.8352 0.290332 11.0664C0.350511 11.2975 0.475646 11.5066 0.650926 11.6688L6.93843 17.4813L5.26968 25.8813C5.22333 26.1154 5.24499 26.358 5.33211 26.5802C5.41923 26.8025 5.56815 26.9951 5.76128 27.1354C5.95442 27.2757 6.18367 27.3577 6.42196 27.3718C6.66024 27.3859 6.89758 27.3315 7.10593 27.215L14.5772 23.0325L22.0484 27.215C22.2569 27.332 22.4945 27.3868 22.7332 27.3728C22.9718 27.3588 23.2015 27.2767 23.3949 27.1362C23.5883 26.9957 23.7373 26.8027 23.8244 26.58C23.9114 26.3574 23.9328 26.1145 23.8859 25.88L22.2172 17.4825L28.5034 11.6688C28.6787 11.5066 28.8038 11.2975 28.864 11.0664C28.9242 10.8352 28.9169 10.5917 28.843 10.3646C28.7691 10.1375 28.6317 9.93631 28.447 9.78486C28.2623 9.63341 28.0381 9.53804 27.8009 9.51004L19.2984 8.50004L15.7122 0.726287Z";
