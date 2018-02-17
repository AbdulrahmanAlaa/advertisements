/** Localization Global defines */
export { LANGUAGES, DEFAULT_LANGUAGE } from './l10n';
/**
 * contains all json path queries so in case the backend response changes we
 * only modifies this query rather than the whole app
 */
export { JSON_PATHS } from './json-path';

/**
 * Contains the key to help get and set info from localstorage
 */
export const LOCAL_STORAGE_PREFIX = 'mcmakler-LocalStore.key';

/**
 * contains the user and token info when dealing with storage 
 */
export const TOKEN =  "TOKEN"
export const USER =  "user"