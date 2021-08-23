/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    if (len1 === 0) {
      return (nums2[parseInt(len2/2)] + nums2[parseInt((len2-1)/2)]) / 2;
    }
    if (len2 === 0) {
      return (nums1[parseInt(len1/2)] + nums1[parseInt((len1-1)/2)]) / 2;
    }
    const length = len1 + len2;
    let i=0, j=0;
    const middle = length / 2;
    let prev = 0, current = 0;
    while((i<len1 || j<len2) && (i + j) <= middle) {
      if (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
          prev = current;
          current = nums1[i];
          i++;
        }
        else {
          prev = current;
          current = nums2[j];
          j++;
        }
      } else if (i < len1) {
        prev = current;
        current = nums1[i];
        i++;
      } else {
        prev = current;
        current = nums2[j];
        j++;
      }
    }
    return length % 2 === 0 ? (prev + current) / 2 : current;
};