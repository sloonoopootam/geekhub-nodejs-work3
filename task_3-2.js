const fjords = (array) => {
    const blueWaterBlocks = [];
    array.map((a, i) => {
        const twinPeaks = [a, a];
        array.map((b, n) => (b > twinPeaks[0] && n < i) ? twinPeaks[0] = b : (b > twinPeaks[1] && n > i) ? twinPeaks[1] = b : 0);
        const depthWater = twinPeaks.sort((a, b) => a - b)[0];
        if (depthWater > a) return blueWaterBlocks.push(depthWater - a);
    });
    return blueWaterBlocks.reduce((a, b) => a + b, 0);
};

const testArrays = [
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],   // 10
    [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],      // 17
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],   // 10
    [7, 0, 1, 3, 4, 1, 2, 1],            //  9
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],   // 10
    [2, 2, 1, 2, 2, 3, 0, 1, 2],         //  4
    [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],   // 24
    [2, 2, 2, 2, 2]                      //  0
];

console.table(testArrays.map(a => fjords(a)));