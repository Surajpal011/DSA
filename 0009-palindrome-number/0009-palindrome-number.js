/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = x.toString();
    left = 0;
    right = y.length -1;
    while( left <= right){
        if(y[left] != y[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
};