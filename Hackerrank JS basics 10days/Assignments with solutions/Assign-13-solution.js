function getCount(objects) {
    var count = 0;
    for (var a in objects) {
        if (objects[a].x === objects[a].y) {
            count++;    
        }    
    }
    return count;
}