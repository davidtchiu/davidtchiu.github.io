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
    
    /** {@inheritDoc} */
    @Override
    public boolean isProperlyNested() {
        // TODO
        return false; // Placeholder return
    }
    
    /** {@inheritDoc} */
    @Override
    public Queue<String> suggestFixes() {
        // TODO
        return null; // Placeholder return
    }
    
    /** {@inheritDoc} */
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