function isPalindrome(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

module.exports = isPalindrome;
