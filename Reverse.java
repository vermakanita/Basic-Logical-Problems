import java.util.LinkedList;
import java.util.Iterator;

public class Reverse {
    public static void main(String args[]) {
        LinkedList<String> a = new LinkedList<>();
        a.add("india");
        a.add("america");
        a.add("russia");
        a.add("dubai");
        a.add("new york");

        a.add(0, "japan");
        a.add(5, "china");

        // To reverse the list, use the `Collections.reverse` method
        // Collections.reverse(a);

        // To iterate through the list in reverse order, use a descending iterator
        Iterator<String> itr = a.descendingIterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }
}