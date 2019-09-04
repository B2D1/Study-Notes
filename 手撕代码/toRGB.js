const HexToRGB = str => {
    str = str.substring(1);
    return (
        'RGB(' +
        parseInt(str.substring(0, 2), 16) +
        ',' +
        parseInt(str.substring(2, 4), 16) +
        ',' +
        parseInt(str.substring(4, 6), 16) +
        ')'
    );
};

console.log(HexToRGB('#ffffff'));
