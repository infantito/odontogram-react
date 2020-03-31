// https://twitter.com/addyosmani/status/1242737991526776832
export const chunk = (array, size = array.length) =>
  Array.from(
    {
      length: Math.ceil(array.length / size),
    },
    (_, i) => array.slice(i * size, i * size + size),
  );
