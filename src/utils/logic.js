export const capitaliseString = (string) => {
  let res = string.split(" ");
  res = res.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  return res.join(" ");
};
