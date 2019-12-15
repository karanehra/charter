/**
 * Generated a random UUID for requested length
 * @param {number} length The length of UUID needed
 * @returns {string}
 */
export const getUUID = length => {
  let uuid = "";
  const choices = "abcdefghijklmnopqrstuvwxyz0987654321".split("");
  for (let i = 0; i < length; i++) {
    uuid += choices[Math.floor(Math.random() * choices.length)];
  }
  return uuid;
};
