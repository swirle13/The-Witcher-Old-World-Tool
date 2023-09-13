// File containing generic helper scripts/functions

/**
 * Shuffles array with array destructuring assignment.
 * @param array Array of items to be shuffled.
 * @returns Shuffled array.
 */
export const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

/**
 * Produces an array of strings, starting at '0' through to 'arr.length', e.g. `my_arr.length = 3`, produces
 * `['0', '1', '2']`. Used primarily for `react-bootstrap.Accordion.activeKey` to set all
 * `react-bootstrap.Accordion.Item`s as the `activeKeys`, aka expand all `Accordion.Items`.
 * @param arr Array of strings
 * @returns Array of strings of the stringified length of arr
 */
export function lenToStrArr<T>(arr: T[]): string[] {
    return [...Array(arr.length).keys()].map(a => String(a));
}