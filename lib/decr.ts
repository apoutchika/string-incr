export function stringDecr(
  str: string | number,
  firstAppend?: string | number
) {
  if (typeof str === "number") {
    return str - 1;
  }

  if (typeof str !== "string") {
    return "-1";
  }

  if (str.length === 0) {
    return "-1";
  }

  const name = str.replace(/\d+$/, "");
  const number = str.split("").reduce((res, letter) => {
    if (letter.match(/^\d$/)) {
      return `${res}${letter}`;
    }
    return "";
  }, "");

  if (number !== "") {
    return name + (Number(number) - 1);
  }

  if (typeof firstAppend === "number") {
    return `${name} ${firstAppend}`;
  }

  if (typeof firstAppend !== "string") {
    return `${name} -1`;
  }

  if (firstAppend.match(/\d$/)) {
    return name + firstAppend;
  }

  return `${name + firstAppend}-1`;
}
