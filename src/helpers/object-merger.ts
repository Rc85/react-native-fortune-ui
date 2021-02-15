export const objectMerger = (obj1: any, obj2: any) => {
  let result = {};

  if (obj1 instanceof Object && !(obj1 instanceof Array)) {
    result = { ...result, ...obj1 };
  } else if (obj1 instanceof Array) {
    result = { ...result, ...Object.assign({}, ...obj1) };
  }

  if (obj2 instanceof Object && !(obj2 instanceof Array)) {
    result = { ...result, ...obj2 };
  } else if (obj2 instanceof Array) {
    result = { ...result, ...Object.assign({}, ...obj2) };
  }

  return result;
};
