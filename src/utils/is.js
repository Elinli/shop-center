const is = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`;

export const isFunction = (val) => is(val, 'Function');

export const isArray = (val) => is(val, 'Array');

export const isString = (val) => is(val, 'String');

export const isNumber = (val) => is(val, 'Number');

export const isObject = (val) => is(val, 'Object');
