const numbers = `۰۱۲۳۴۵۶۷۸۹`;

const convert = (num) => {
  let res = "";
  const numberToString = num.toString();
  const mapThisString = (callBack) =>
    numberToString
      .split("")
      .map((a, b) => callBack(a, b, numberToString))
      .join("");
  mapThisString((number) => (res += numbers.charAt(number)));
  return res;
};

module.exports = { convert };
