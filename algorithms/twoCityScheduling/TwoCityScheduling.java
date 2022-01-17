class TwoCityScheduling {
    public int twoCitySchedCost(int[][] costs) {
        int sum = 0;
        int[] ar = new int[2000];
        for (int[] iArray : costs) {
            sum = sum + iArray[0];
            ar[iArray[1] - iArray[0] +1000]++;
        }
        int index = 0;
        int i = 0;
        while (i < costs.length / 2) {
            while (ar[index] > 0 && i<costs.length/2) {
                sum = sum + (index -1000);
                ar[index]--;
                i++;
            }
            index++;
        }
        return sum;
    }
}
