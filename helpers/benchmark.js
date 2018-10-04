module.exports = function benchmark(fn, description) {
    var t = process.hrtime();
    fn();
    let output = description ? description : 'Benchmark'
    let t2 = process.hrtime(t);
    console.log(output + ': %d seconds and %d nanoseconds', t2[0], t2[1]);
}