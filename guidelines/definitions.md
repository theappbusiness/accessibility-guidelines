# Definitions

### Tab order

All interactive elements on a page/screen should be reachable by users using the 'tab' key on their keyboard. 
When users press the 'tab' key once, they reach the first interactive element on the page. When they press the 'tab' key again they reach the second focusable element, and so on.

The **tab order** (also known as 'visual focus order' or 'keyboard focus order') is the order in which interactive elements appear, when users press 'tab' repeatedly.

### Keyboard focus

All interactive elements on a page/screen should be reachable by users using the 'tab' key on their keyboard. 
When users press the 'tab' key once, they reach the first interactive element on the page. When they press the 'tab' key again they reach the second focusable element, and so on.

The position of the 'keyboard focus' is the interactive element on the page that has last been reached using the 'tab' key. That element is the one that will respond to keyboard events (for example, selecting a radio button, visiting a link or inputting test in an input field).

### Accessible Name

Every user interface components that users can interact with needs to have a name that assistive technologies (like screen readers or speech-input software) can understand.

That name is called the 'Accessible Name'. (In the official Web Content Accessibility Guidelines, that name is just called '[name](https://www.w3.org/TR/WCAG21/#dfn-name)').

For example:
* In a 'Submit' button, the text 'Submit' provides the name of the button.
* The name of a button represented by a magnifying glass icon might be 'Search'. In this example, the word 'Search' name might not be visible on the screen, but the button still needs a name. That name can be set in code (using `aria-label` for the Web, or `accessibilityLabel` on iOS, for example).

#### Where does the 'Accessible Name' of a UI components come from?

An interactive UI component might be given an Accessibility Name in a number of ways:
1. **from its content** (like in the 'Submit' button example above)
2. **from a visible label** it is associated with in code (in HTML this might be by associating an `input` element with a `label` element, or by using `aria-labelledby`)
3. **from a property** set in code (like `aria-label="Search"` for the Web or `textField.accessibilityLabel = "First Name"` for iOS).