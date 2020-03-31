import QUADRANTS from './quadrants';
import TEETH from './teethTypes';

const ODONTOGRAM_TYPES = [
  // ADULT
  32,
  // CHILDISH
  20,
];
const TEETH_KEYS = Object.keys(TEETH);

const getQuadrant = (masterIndex, parentIndex, quadrantsTotalPerSide) => (
  _,
  index,
  source,
) => {
  const partial = masterIndex * quadrantsTotalPerSide * source.length;
  const tens = (
    parentIndex +
    1 +
    (parentIndex ? index + 1 : index) +
    partial
  ).toString();
  const quadrant = TEETH_KEYS.reduce((teeth, toothName) => {
    const toothByType = TEETH[toothName];
    const teethByOdontogram = toothByType[masterIndex];
    const quadrantByPosition = teethByOdontogram[parentIndex];
    const teethByQuadrant = [...Array(quadrantByPosition[index]).keys()];

    teethByQuadrant.forEach(_ => {
      const tooth = {
        tooth: toothName,
        nomenclature: tens + (teeth.length + 1),
      };

      if (parentIndex % quadrantByPosition.length) {
        if (index % quadrantByPosition.length) {
          teeth.unshift(tooth);
        } else {
          teeth.push(tooth);
        }
      } else {
        if (index % quadrantByPosition.length) {
          teeth.push(tooth);
        } else {
          teeth.unshift(tooth);
        }
      }
    });

    return teeth;
  }, []);

  return quadrant;
};

const getTeethQuadrant = masterIndex => (side, index, source) => {
  const quadrant = side.map(getQuadrant(masterIndex, index, source.length));

  return index % source.length ? quadrant.reverse() : quadrant;
};

const odontogram = (master = 0) => QUADRANTS.map(getTeethQuadrant(master));

export { odontogram as default, ODONTOGRAM_TYPES };
