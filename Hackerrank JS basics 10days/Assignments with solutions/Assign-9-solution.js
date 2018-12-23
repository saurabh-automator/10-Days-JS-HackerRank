function getSecondLargest(nums) {
    // Complete the function
    let f = nums[0];
    let s = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > f) {
            s = f;
            f = nums[i];
            continue;
        }
        if ((nums[i] > s) && (nums[i] < f)) {
            s = nums[i];
        }
    }

    return s;
}