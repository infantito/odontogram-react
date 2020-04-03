// https://twitter.com/addyosmani/status/1242737991526776832
export const chunk = (array, size = array.length) =>
  Array.from(
    {
      length: Math.ceil(array.length / size),
    },
    (_, i) => array.slice(i * size, i * size + size),
  );

export const formatJoinId = (collection, key, initial = []) =>
  collection.reduce((data, item) => {
    item.id = item[key];
    data[data.length - 1][key] += item[key];
    data.splice(-1, 0, item);

    return data;
  }, initial);

export const predicateTotal = (total, source, multiplier) => {
  const value =
    source.reduce((value, item) => {
      const amount = value + item.length;
      return amount;
    }, 0) * multiplier;

  return total === void 0 ? false : total !== value;
};

export const isHexColor = color => {
  const hex = color.includes('#') ? color.substr(1) : color;
  const num = parseInt(hex, 16);

  return num.toString(16) === hex;
};
