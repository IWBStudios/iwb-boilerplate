import { useGlobalStore } from '@/stores/globalStore';

/**
 * Translates a given key using the global locale store and formats it with the provided arguments.
 *
 * @param {string} key - The key to look up in the locale store for translation.
 * @param {...any} args - The arguments to replace `%s` placeholders in the translation string.
 * @returns {string} The translated and formatted string. If the key is not found in the locale store, the key itself is returned.
 *
 * @example
 * // Assuming globalStore.locales = { greeting: "Hello, %s!" }
 * // Returns "Hello, John!"
 * Translate("greeting", "John");
 *
 * @example
 * // Assuming globalStore.locales = { items: "You have %s new %s." }
 * // Returns "You have 5 new messages."
 * Translate("items", 5, "messages");
 *
 * @example
 * // If the key is not found in the locale store
 * // Returns "unknown_key"
 * Translate("unknown_key");
 */
export function Translate(key, ...args) {
  const globalStore = useGlobalStore();

  let translation = globalStore.locales[key];
  if (!translation) return key;

  args.forEach((arg) => {
    translation = translation.replace('%s', arg);
  });

  return translation;
}
