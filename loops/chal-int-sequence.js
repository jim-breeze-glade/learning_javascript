function sequence(n) {
    let n = ''
    for (i = 1; i <= n; i++) {
        n += i;
    }
    return n;
}

console.log(sequence(5));