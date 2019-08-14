# Web Content Accessibility Guidelines Summary

This document will help you quickly get up to speed with the [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) (WCAG), and avoid common accessibility-related mistakes.

Click on each guideline to see details and code examples.

This summary is a simplification. If you're not sure how to meet a requirement, check the official [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/).

### 1. Easy to perceive

Your website/app must present information in ways people can recognise and use, no matter how they consume content (for example if they have low vision, or use assistive technologies like a screen reader software).

#### Provide text alternatives for images

* [Text alternatives for images](guidelines/1.1.1.md): Provide a text description for images. Make sure the description conveys the same message or functionality.

* [Decorative images](guidelines/1.1.1.md): If an image doesn't convey any information, make sure that this is indicated in code.

#### Provide alternatives for audio content, videos and presentations

* [Transcript (audio-only content)](): For audio content that has no video (like a podcast), provide a transcript.

* [Captions (videos and presentations)](): For videos and presentations (both live and pre-recorded), provide captions.

* [Text or audio description (videos and presentations)](): For videos and presentations, provide an equivalent text description, or an audio description of what happens on screen.

* [Audio description (videos presentations if pre-recorded)](): 
For videos and presentations that are pre-recorded, provide an audio description of what happens on screen, even if you've already provided a text description.

#### Create content that can be presented in different ways

* [Structure and relationships](guidelines/1.3.1.md): When designs convey a structure visually (like distinct sections within a page, or a label next to a checkbox) that structure must also be identified in code.

* [Order of elements in code](guidelines/1.3.2.md): Make sure that elements appear in a logical reading order in code, so that they are presented in a meaningful order to screen reader users.

* [Instructions don't rely on sensory characteristics](): If you give tips or instructions, don't assume that users can perceive colour, size, shape, sound, or the location of elements on screen.

* [Orientation](guidelines/1.3.4.md): Make sure a page's view is not locked to either portrait or landscape mode, unless this is essential.

* [Purpose of text fields](): If a text input field collects information about the user, identify its specific purpose in code (e.g. email, password, street address).

#### Make content easy for people to see and hear

* [Audio control](): If any audio content plays automatically for more than three seconds, give people a way to stop it.

* [Use of colour](): Do not use colour as the only way to convey any piece of information.

* [Text contrast](): Make sure that text has enough contrast against the background colour.

* [Non-text contrast](): Make sure that visual information that identifies important graphics, interactive controls and their state has enough contrast against adjacent colours.

* [Resize text](guidelines/1.4.4.md): Make sure it is possible to complete all tasks when text is resized up to 200%.

* [Reflow](guidelines/1.4.10.md): Make sure users can access all information and functionality on a screen that's as wide as on the iPhone5, without needing to scroll in both directions.

* [Text spacing](): Ensure that no information or functionality gets lost if users increase the space between lines, paragraphs, letters and words.

* [Images of text](): Use real text rather than images of text.

<!-- Previous version that used the phrase "keyboard focus" before it was explained.
[Extra content on hover (or focus):]() If extra content (like tooltips) appear when users hover over an element (or move the keyboard focus to it), it must be easy to dismiss, easy to reach and remain visible. -->

* [Extra content on hover or focus](): If extra content (like tooltips) appear when users hover over an element (or tab to it), it must be easy to dismiss, easy to reach and remain visible.

### 2. Easy to operate

<!-- Your website/app must be easy to navigate and use, no matter how someone interacts with it (for example using voice commands, or just -->

Your website/app must be easy to navigate and use, no matter how someone interacts with it. 

For example people who don't use a mouse may use their voice, or press the 'Tab' key to move their keyboard's focus to interactive controls.

#### Make all functionality work with a keyboard

* [Keyboard](): Make sure every task can be completed using just a keyboard.

* [No keyboard trap](): Make sure that keyboard-only users don't get trapped within any element.

* [Keyboard shortcuts](): If you've added custom keyboard shortcuts, provide a way to switch off or remap these shortcuts.

#### Make it work with other input methods beyond keyboard

* [Complex gestures](): Do not require complex gestures or using more than one finger to do things.

* [Touch or click activation](): Make sure that custom buttons or links do not activate as soon as they are touched, so that users can slide their finger or mouse away to cancel the action.

* [Label in name](): 
When an interactive control has a name on screen, make sure that assistive technologies (like Voice Control) know it by the same name (or a name that includes the name on screen).

* [Device motion](): If a feature uses the device's motion (like shaking or tilting), make sure that responses to these motions can be turned off, and that the feature can be used in another way.

#### Help people navigate and find content

* [Skip to main content](): Give keyboard and screen reader users a way to go directly to the page's main content. [WEB ONLY]

* [Page titled](): Give every page a unique and helpful title that indicates the purpose of the page. [WEB ONLY]

* [Heading and labels](): Provide headings and form labels that help people find content and complete tasks.

* [Focus order](): Make sure that elements receive focus in an order that makes sense when people use a keyboard or a screen reader.

* [Focus visible](): Make sure that keyboard-only users can clearly see which interactive control is focused when they tab through them.

* [Link purpose](): Make sure the purpose of every link is clear from the link text alone, or together with associated content (if screen readers recognise the association).

* [Multiple ways to find a page](): Give people different ways of finding each page (like searching or browsing links), unless the page is a step in a process.

#### Give people enough time to read and use content

* [Timing adjustable](): If there is any time limit (like a session timeout), give people an easy way to extend it.

<!-- Previous version. There was no comprehension problem, but testers struggled to read it.
[Stop visual distractions](): If any blinking, scrolling, animation or frequent updating happens automatically and last more than 5 seconds, give people a way to stop it. -->

* [Visual distractions](): Do not show anything that automatically blinks, scrolls, animates or updates frequently if it lasts more than 5 seconds. Or give people a way to stop it.

#### Do not cause seizures

* [Flashes](): Do not show anything that flashes more than three times a second.

### 3. Easy to understand

Your website/app must make it easy for people to understand information and how to complete tasks.

#### Make text easy to understand

* [Language of page](): In code, identify the language that the content is written in. If the page uses several languages, identify the language of each section.

#### Make things appear and behave in consistent, predictable ways

* [Changes on focus](): Make sure that just navigating to an element using the keyboard doesn't trigger any important or disorientating change (like opening a pop up).

* [Changes on input](): Make sure that just changing the state of a form input (like a dropdown menu) does not trigger any important or disorientating change.

* [Consistent navigation](): Make sure that navigation elements that appear on multiple pages look and behave consistently.

* [Consistent feature names](): Make sure that features that appear on multiple page are identified consistently.

#### Help people avoid and correct mistakes

* [Error identification](): When someone makes a mistake, provide an error message in text and make it obvious where the mistake was made.

* [Form labels and instructions](): Provide form labels to make it clear what information is expected, and optionally provide extra hints to help people avoid mistakes.

* [Error suggestions](): When someone makes a mistake give them suggestions on how to correct it, unless it compromises security.

* [Error prevention](): If users are making a legal commitment, financial transaction, or updating personal data, give them a way to review and check the information they have entered.

### 4. Robust and compatible

Your website/app must work with different web browsers and/or assistive technologies.

* [Valid HTML](): Make sure the code of each page does not contain errors that are known to cause conflicts. [WEB ONLY]

* [Name, Role and State of interactive controls](): Make sure the code of each page enables assistive technologies to discover the purpose of every feature, the way that feature is identified, and the state it is currently in.

* [Status messages](): Make sure status messages are identified in code, so that assistive technologies can convey them to users.
