/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        const newNumbers = [...numbers];
        newNumbers.splice(1, numbers.length - 1, numbers[numbers.length - 1]);
        return newNumbers;
    } else if (numbers.length === 1) {
        const newNumbers = [...numbers, ...numbers];
        return newNumbers;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map(
        (element: number): number => element * 3
    );
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArray = numbers.map((element: string): number =>
        parseInt(element) ? parseInt(element) : 0
    );
    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const strippedArray = amounts.map((element: string): string =>
        element.replace("$", "")
    );
    return stringsToIntegers(strippedArray);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const strippedArray = messages.filter(
        (element: string): boolean => !element.endsWith("?")
    );
    const shoutArray = strippedArray.map((element2: string): string =>
        element2.endsWith("!") ? element2.toUpperCase() : element2
    );
    return shoutArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortArray = words.filter(
        (element: string): boolean => element.length < 4
    );
    return shortArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const colorsClone = colors.filter(
            (element: string): boolean =>
                element === "red" || element === "blue" || element === "green"
        );
        if (colors.length === colorsClone.length) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (curSum: number, num: number) => (curSum += num),
        0
    );
    const mathArray = addends.map((element: number): string =>
        element.toString()
    );
    const mathString = sum.toString() + "=" + mathArray.toString();
    return mathString.replaceAll(",", "+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //    const allPos = values.filter((element: number): boolean => element > 0);
    const negIndex = values.findIndex((element: number) => element < 0);
    if (negIndex < 0) {
        const sum = values.reduce(
            (curSum: number, num: number) => (curSum += num),
            0
        );
        const allPos = [...values];
        allPos.push(sum);
        return allPos;
    } else {
        const removeAfterNeg = values.map((element: number): number =>
            values.indexOf(element) < negIndex ? element : 0
        );
        const sum = removeAfterNeg.reduce(
            (curSum: number, num: number) => (curSum += num),
            0
        );
        const returnIndex = [...values];
        returnIndex.splice(negIndex + 1, 0, sum);
        return returnIndex;
    }
}
