class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const hash = {};
        
        function count(n: number): number {
            // base condition
            if(n === 0) return 0;
            if(n <= 2) return n;
            console.log({ n })
            // check hash
            if(hash[n]) return hash[n];

            const res = count(n - 2) + count(n - 1);

            hash[n] = res;

            return res;
        }

        return count(n);
    }
}
