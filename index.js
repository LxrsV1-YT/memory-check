function memory() {
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    var mb = Math.round(used * 100) / 100
    return mb;
}

module.exports.memory = this.memory;
