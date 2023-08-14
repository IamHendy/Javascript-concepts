const store = new Map([
    ["hat", 50],
    ["dress", 100],
    ["jeans",  80],
    ["scarf", 30]
]);

store.forEach((value, key) => console.log(`${key} $${value}`));

