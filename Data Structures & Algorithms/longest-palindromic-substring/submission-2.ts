class Solution {

    

    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let longest = ""

        function expand(left: number, right: number): void {
            while(
                left >= 0 &&
                right < s.length &&
                s[left] == s[right]
            ) {
                if(right - left + 1 > longest.length) {
                    longest = s.slice(left, right + 1);
                }
                left--;
                right++;
            }

            return;
        }

        for(let i = 0; i < s.length; i++) {
            // even string check
            expand(i,i);

            expand(i, i + 1);
        }

        return longest;
    }
}
