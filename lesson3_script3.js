function out(n) {
    ++n;
    console.log(n);
    return n;
}
for (var i = 0; i < 10; i = out(i)) {}