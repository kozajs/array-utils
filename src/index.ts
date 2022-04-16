/**
 * Empties an array
 * @param array Array to empty
 */
export function emptyArray(array: any[]): void {
	emptyArrays(array);
};

/**
 * Empties arrays
 * @param arrays Arrays to empty
 */
export function emptyArrays(...arrays: any[][]): void {
	for (const array of arrays) {
		while (array.length > 0) array.pop();
	}
};

/**
 * Returns a number nearest to the input number from an array of numbers
 * @param input Input number
 * @param numbers Array of numbers
 * @returns The number from `numbers` that is closest to `input`
 */
export function closestNumber(input: number, numbers: number[]): number {
	return numbers.reduce((prev, curr) => (Math.abs(curr - input) < Math.abs(prev - input) ? curr : prev));
};
