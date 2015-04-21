function separator(number) {
    number += "";
    var parts = number.split('.');
    parts[0] = parts[0].split('').reverse().join('');
    var strs = [];
    for (var i = 0; i < parts[0].length; i += 3) {
        if (parts[0][i] == '-') {
            strs[strs.length - 1] += '-';
            break;
        }
        strs.push(parts[0].substr(i, 3 > parts[0].length - i ? parts[0].length - i : 3));
    }
    if (parts[1]) {
        parts[1] = '.' + parts[1];
    } else {
        parts[1] = "";
    }
    return strs.join(',').split('').reverse().join('') + parts[1];
}
