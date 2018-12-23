function vowelsAndConsonants(s) {
    var n = '';
    for (var i = 0; i < 1000; i++) {
        if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || s.charAt(i) == 'o' || s.charAt(i) == 'u'){
            console.log(s.charAt(i));
            continue;
        }
        n = n.concat(s.charAt(i));
    }
    for (var i = 0; i < 1000;i++) {
        console.log(n.charAt(i));
    }
}