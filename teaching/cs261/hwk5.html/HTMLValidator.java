import java.util.*;

/**
 * Write a description of class HTMLValidator here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class HTMLValidator implements Syntax
{
    private Queue<String> tags;
    
    public void set(Queue<String> tags) {
        this.tags = tags;
    }
    
    /**
     * Checks whether the tags in the HTML string are properly nested.
     * 
     * This method uses a stack to match opening and closing tags in the correct order.
     * Void tags (e.g., <br/>) and comments (<!-- ... -->) are ignored.
     * 
     * @return true if all opening tags are matched with correct closing tags in the proper order;
     *         false if any tag is mismatched, extra, or missing.
     */
    @Override
    public boolean isProperlyNested() {
        // TODO
        return false; // Placeholder return
    }
    
    /**
     * Suggests minimal fixes for improperly nested tags.
     * Returns a queue of tags (and inserted corrections) representing a fixed version.
     */
    @Override
    public Queue<String> suggestFixes() {
        // TODO
        return null; // Placeholder return
    }
    
    /**
     * Prints tags with indentation based on nesting level.
     */
    @Override
    public void prettyPrint() {
        // TODO
    }
    
    // --- Helper Methods: Do not edit below ---

    private boolean tagsMatch(String openTag, String closeTag) {
        return openTag.substring(1).equals(closeTag.substring(2));
    }

    private boolean isOpenTag(String tag) {
        return tag.startsWith("<") && !tag.startsWith("</") && tag.endsWith(">");
    }

    private boolean isCloseTag(String tag) {
        return tag.startsWith("</") && tag.endsWith(">");
    }

    private boolean isVoidTag(String tag) {
        return isOpenTag(tag) && tag.endsWith("/>");
    }

    private boolean isComment(String tag) {
        return tag.startsWith("<!--") && tag.endsWith("-->");
    }
}