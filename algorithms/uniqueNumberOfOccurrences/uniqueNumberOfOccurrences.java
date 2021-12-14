
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap(arr.length);
        for(int i : arr){
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        Map<Integer, Integer> map2 = new HashMap<>(map.size());
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            Integer value = entry.getValue();
            map2.put(value, map2.getOrDefault(value, 0) + 1);
            if (map2.get(value) > 1) {
                return false;
            }
        }
        return true;
    }
}