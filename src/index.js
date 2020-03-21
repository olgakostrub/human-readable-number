module.exports = function toReadable(number) {
    const toReadableDigit = num => {
        if (num === 1) return "one";
        if (num === 2) return "two";
        if (num === 3) return "three";
        if (num === 4) return "four";
        if (num === 5) return "five";
        if (num === 6) return "six";
        if (num === 7) return "seven";
        if (num === 8) return "eight";
        if (num === 9) return "nine";
        return "";
    };

    const toReadableTeens = num => {
        if (num === 10) return "ten";
        if (num === 11) return "eleven";
        if (num === 12) return "twelve";
        if (num === 13) return "thirteen";
        if (num === 14) return "fourteen";
        if (num === 15) return "fifteen";
        if (num === 16) return "sixteen";
        if (num === 17) return "seventeen";
        if (num === 18) return "eighteen";
        if (num === 19) return "nineteen";
        return "";
    };

    const toReadableTenfold = num => {
        if (num === 1) return "ten";
        if (num === 2) return "twenty";
        if (num === 3) return "thirty";
        if (num === 4) return "forty";
        if (num === 5) return "fifty";
        if (num === 6) return "sixty";
        if (num === 7) return "seventy";
        if (num === 8) return "eighty";
        if (num === 9) return "ninety";
        return "";
    };

    if (number === 0) return "zero"; // zero is the extreme case - it is only pronounced when standing alone

    let result = "";

    const hundreds = Math.floor(number / 100);
    const tenths = Math.floor((number - hundreds * 100) / 10);
    const ones = number % 10;

    if (hundreds) {
        result += toReadableDigit(hundreds) + " hundred ";
    }

    if (tenths > 1) {
        result += toReadableTenfold(tenths) + " " + toReadableDigit(ones);
    }

    if (tenths === 1) {
        result += toReadableTeens(tenths * 10 + ones);
    }

    if (tenths === 0) {
        result += toReadableDigit(ones);
    }

    return result.trim();
};
