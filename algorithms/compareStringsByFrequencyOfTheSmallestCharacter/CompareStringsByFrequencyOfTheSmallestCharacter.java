import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class CompareStringsByFrequencyOfTheSmallestCharacter {
    public int[] numSmallerByFrequency(String[] queries, String[] words) {
        int size = queries.length;
        int wordsSize = words.length;
        List<Integer> list = new ArrayList<>(size);
        Map<Integer, Integer> wordsMap = new HashMap<>();
        for (int p = 0; p < wordsSize; p++) {
            wordsMap.put(p, f(words[p]));
        }

        for (int i = 0; i < size; i++) {
            int q = 0;
            int queLetterSize = f(queries[i]);
            for (int j = 0; j < wordsSize; j++) {
                if (queLetterSize < wordsMap.get(j)) {
                    q++;
                }
            }
            list.add(q);
        }
        int[] ints = list.stream().mapToInt(Integer::intValue).toArray();
        return ints;
    }

    public static Integer f(String s) {
        Map<Character, Integer> map = new HashMap<>(s.length());
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        Character maxLetter = 'z';
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getKey().compareTo(maxLetter) < 0) {
                maxLetter = entry.getKey();
            }
        }
        return map.get(maxLetter);
    }
}