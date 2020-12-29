/**
 * Validates if the value is empty.
 *
 * @param value
 * @return {undefined | string}
 */
export const required = (value) => (value ? undefined : 'Field Required');

/**
 * Validates the maximal length of the value.
 * Usage: const maxLength15 = maxLength(15)
 *
 * @param max
 * @return {undefined | string}
 */
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Input shouldn't be bigger than ${max} characters` : undefined;

/**
 * Validates the minimal length of the value.
 * Usage: export const minLength2 = minLength(2)
 *
 * @param min
 * @return {undefined | string}
 */
export const minLength = (min) => (value) =>
  value && value.length < min ? `Input should be bigger than ${min} characters` : undefined;

/**
 * Validates if the value is a number.
 *
 * @param value
 * @return {undefined | string}
 */
export const number = (value) => (value && isNaN(Number(value)) ? 'Input is not a number' : undefined);

/**
 * Validates if the value is a string.
 *
 * @param value
 * @return {undefined | string}
 */
export const string = (value) =>
  value && !(typeof value === 'string' || value instanceof String) ? 'Input is not a string' : undefined;

/**
 * Validates the minimal value.
 * Usage: export const minValue18 = minValue(18);
 *
 * @param min
 * @return {undefined | string}
 */
export const minValue = (min) => (value) =>
  value && value < min ? `Input should be bigger than ${min}` : undefined;

/**
 * Validates the email.
 *
 * @param value
 * @return {undefined | string}
 */
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Input is not an email' : undefined;

/**
 * Validates if the value is alpha-numeric.
 *
 * @param value
 * @return {undefined | string}
 */
export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Input is not alpha numeric' : undefined;

/**
 * Validates the phone number.
 *
 * @param value
 * @return {undefined | string}
 */
export const phoneNumber = (value) =>
  value && !/^(\+)?([ 0-9]){10,16}$/i.test(value) ? 'Input is not a phone number' : undefined;



/**
 * Validates the input object according to the input schema.
 *
 * @param object
 * @param schema
 * @return object with errors
 */
export const validate = (object, schema) => {
  const errors = {};
  const validateFormInner = (
    values,
    innerSchema,
    collector
  ) => {
    Object.keys(innerSchema)
      .filter(v => innerSchema.hasOwnProperty(v))
      .forEach(v => {
        const s = innerSchema[v];

        if (Array.isArray(s)) {
          s.forEach(validator => {
            const result = validator(values[v], values);
            if (result) {
              collector[v] = result;
            }
          });
        } else {
          validateFormInner(values[v], innerSchema[v], collector);
        }
      });

    return collector;
  };

  const collectedErrors = validateFormInner(object, schema, errors);
  return Object.keys(collectedErrors).length ? collectedErrors : undefined;
};