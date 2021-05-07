const formatNums = (value) => {
  let output = "";
  let decimal = "";
  value.includes(",") ? (output = value.replace(/,/g, "")) : (output = value);
  if (value.includes(".")) {
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf("."));
  } else {
    output = value;
  }
  return Number(output).toLocaleString() + decimal;
};

export default formatNums;
