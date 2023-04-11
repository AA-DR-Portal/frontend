// Interface for params
interface Params {
  [key: string]: any;
}

/**
 * @param params
 * @throws an array of the first invalid param and its value
 */
const invalidParams = (params: Params) => {
  let keys = Object.keys(params);

  for (const key of keys) {
    let val = params[key as keyof Params];

    if (typeof val === "undefined" || val === null) {
      throw [key, val];
    }
  }
};

/**
 * @param strings
 * @throws an array of the first invalid string and its value
 */
const invalidStrings = (strings: Params) => {
  let keys = Object.keys(strings);

  for (const key of keys) {
    let val = strings[key as keyof Params];

    if (typeof val !== "string" || val.trim() === "") {
      throw [key, val];
    }
  }
};

export { invalidParams, invalidStrings };
