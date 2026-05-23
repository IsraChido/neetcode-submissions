class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const seenCountForS = {};

        for (const segmentS of s) {
            seenCountForS[segmentS] = (seenCountForS[segmentS] || 0) + 1;
        }

        for (const segmentT of t) {
            if (!seenCountForS[segmentT]) return false;
            seenCountForS[segmentT]--;
        }

        return true;
    }
}
