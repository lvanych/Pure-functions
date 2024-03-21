import showHealthLevel from "../app";

const dataList = [
    [500, 'healthy'],
    [50, 'wounded'],
    [10, 'critical'],
    [-1, 'dead']
]
const handler = test.each(dataList);

handler('testing show health level function with %i amount', (amount, expected) => {
    const result = showHealthLevel({health: amount});
    expect(result).toBe(expected)
})
