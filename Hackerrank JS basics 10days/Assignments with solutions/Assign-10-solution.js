function reverseString(s) {
    try {
        var arr = s.split("");
        var revArr = arr.reverse();
        var join = revArr.join("");
        console.log(join);
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}