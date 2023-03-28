export function randomNum(min = 0, max = 4) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function wait(min = 1000, max = 4500) {
    return new Promise((r) => {
        if (max == null) {
            max = min;
            min = 0;
        }
        setTimeout(r, randomNum(min, max));
    });
}