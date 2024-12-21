/**
 * Formats a string by replacing placeholders (`%s`) with the provided arguments.
 *
 * @param {string} str - The string containing `%s` placeholders to be replaced.
 * @param {...any} args - The arguments to replace the placeholders with, in order.
 * @returns {string} The formatted string with all `%s` placeholders replaced by the corresponding arguments.
 *
 * @example
 * // Returns "Hello, John!"
 * format("Hello, %s!", "John");
 *
 * @example
 * // Returns "You have 5 new messages."
 * format("You have %s new %s.", 5, "messages");
 */
export function format(str, ...args) {
  let i = 0;
  return str.replace(/%s/g, () => args[i++] || '');
}
