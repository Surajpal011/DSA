/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    s = s.toLowerCase();
    left = 0;
    right = s.length - 1;
    while (left <= right){
        if(s[left] == s[right]){
            left ++;
            right --;
            continue;
        }else{
            return false;
        }
    }
    return true;
};