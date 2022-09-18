import _ from 'lodash';

export const camelize = (obj: object) =>
_.transform(obj, (acc: any, value, key, target) => {
  const camelKey = _.isArray(target) ? key : _.camelCase(key);

  acc[camelKey] = _.isObject(value) ? camelize(value) : value;
});