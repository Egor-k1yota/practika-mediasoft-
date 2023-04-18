const a = [1, 4, 6];
const b = [11, 33, 22];
a.sort((x, y) => {
    const indexX = b.indexOf(x);
    const indexY = b.indexOf(y);
    return indexX - indexY;
});
console.log(a); // [1, 6, 4]