function divideAndConquerSum(arr) {

    function Helper(a) {

        if (a.length === 0) return 0; // empty
        if (a.length === 1) return a[0]; // 1 ele


        const third = Math.max(1, Math.floor(a.length / 3)); //least 1 ele each split
        const firstPart = a.slice(0, third);
        const secondPart = a.slice(third, 2 * third);
        const thirdPart = a.slice(2 * third);

        return Helper(firstPart) + Helper(secondPart) + Helper(thirdPart);
    }

    //recursion
    return Helper(arr);
}
