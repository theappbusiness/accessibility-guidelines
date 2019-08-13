# Web Content Accessibility Guidelines Summary

This document will help you quickly get up to speed with Web Content Accessibility Guidelines 2.1 (WCAG), and avoid common accessibility-related mistakes.

Click on each guideline to see details and code examples.

This summary is a simplification. If you're unsure about how to meet a requirement, check the [official Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/).

### 1. Easy to perceive

Your website/app must present information in ways people can recognise and use, no matter how they consume content (for example if they have low vision or use a screen reader).

#### Provide text alternatives for images

* [Text alternatives for images](guidelines/1.1.1.md): Provide a text description for images. Make sure the description serves the same purpose as the image.

#### Provide alternatives for audio content, videos and presentations

* [Transcript for audio content](): Provide a transcript for audio content that has no video (like a podcast). The transcript must serve the same purpose as the original content.

* [Captions for videos and presentations](): Provide captions for videos and presentation, both live or pre-recorded. Include all dialogue and important sound-effects.

* [Text or audio description of videos and presentations](): Provide a text or audio description of videos or presentations. The description must serve the same purpose as the original content.

* [Audio description of pre-recorded videos or presentations](): If a video or presentation is prerecorded (rather than live), provide an audio description of the recording, even if you've already provided a text description.

#### Create content that can be presented in different ways

* [Structure and relationships:](guidelines/1.3.1.md) When designs convey a structure of information visually (like sections within a page, or a data table), that structure must also be identified in code so that screen readers can understand it.

* [Order of elements in code:](guidelines/1.3.2.md) Make sure that elements appear in a logical reading order in code, so that they are presented in a meaningful order to screen reader users.

* [Instructions don't rely on sensory characteristics:]() Do not use colour, size, shape, sound or location as the only way to convey any instruction.

* [Orientation:](guidelines/1.3.4.md) Make sure a page's view is not locked to either horizontal or vertical only, unless this is essential.

* [Purpose of text fields:]() If a text input field collects information about the user, identify its specific purpose in code (e.g. email, password, street address).

#### Make content easy for people to see and hear

* [Audio control:]() If any audio content plays automatically for more than three seconds, give people a way to stop it.

* [Use of colour:]() Do not use colour as the only way to convey information of any kind.

* [Text contrast:]() Make sure that text has enough contrast against the background colour.

* [Non-text contrast:]() Make sure that interactive controls (including visual elements that indicate their states) and important graphics have enough contrast against their adjacent colours.

* [Resize text:](guidelines/1.4.4.md) Make sure it is possible to complete all tasks when text is resized up to 200%.

* [Reflow:](guidelines/1.4.10.md) All information and functionality must be available on a screen that's 320 CSS pixel wide, without needing to scroll horizontally

* [Text spacing:]() Ensure that no information or functionality gets lost if users increase the space between lines, paragraphs, letters and words.

* [Images of text:]() Use actual text rather than images of text.

* [Extra content on hover or focus:]() If extra content (like tooltips or sub-menus) appear when users hover over an element (or move the keyboard focus to it), it must be easy to dismiss, easy to reach and remain visible.

### 2. Easy to operate

Your website/app must be navigable and usable no matter how someone uses it (without a mouse, with voice commands, or with a screen magnifier for example).

#### Make functionality work with a keyboard

* [Keyboard:]() Make sure every task can be completed using just a keyboard.

* [No keyboard trap:]() Make sure that keyboard-only users don't get trapped within any element.

* [Keyboard shortcuts:]() If you've added custom keyboard shortcuts, provide a way to switch off or remap these shortcuts.

#### Give people enough time to read and use content

* If there are time limits, give people a way to turn off or extend them. [More about 2.2.1]()

* If any blinking, scrolling, animation or frequent updating happens automatically and last more than 5 seconds, give people a way to stop it. [More about 2.2.2]()

#### Do not cause seizures

* Do not use content that flashes more than three times a second. [More about 2.3.1]()

#### Provide ways to help people navigate and find content

* [WEB ONLY] Give keyboard users a way to go directly to the page's main content. [More about 2.4.1]()

* [WEB ONLY] Give every page a unique and helpful title that indicates the purpose of the page. [More about 2.4.2]()

* [WEB ONLY] Make sure that interactive elements receive focus in an order that makes sense. [More about 2.4.3]()

* Make sure the purpose of a link is obvious from its link text alone, or its link text in context. [More about 2.4.4]()

* Give people different ways of finding each page (like searching or browsing links), unless the page is a step in a process. [More about 2.4.5]()

* Provide headings and form labels that will help people find content and complete tasks. [More about 2.4.6]()

* Make sure that keyboard-only users can clearly see which element has the keyboard focus on a page. [More about 2.4.7]()

* Make sure that keyboard focus indicators are clearly visible. [More about 2.4.7]()

* Do not require complex gestures or using more than one finger to do things. [More about 2.5.1]()

* Controls do not make things happen as soon as they are touched. [More about 2.5.2]()

* When an interactive element has a visible label, make sure that the element's accessible name matches (or at least includes) what's on the label. [More about 2.5.3]()

* If a feature uses shaking or tilting, make sure that it can also be activated in another way. And that responses to these motions can be turned off. [More about 2.5.4]()

### 3. Easy to understand

Your website/app must make information understandable, and make it easy for people to understand how to complete tasks.

#### Make text readable and understandable

* Identify the language that the content is written in. [More about 3.1.1]()

* Identify any changes in language within the content. [More about 3.1.2]()

#### Make things appear and behave in consistent ways

* Do not trigger any important or disorientating change when an element just receives focus. [More about 3.2.1]()

* Do not any trigger important or disorientating change when someone just changes the value of an form input. [More about 3.2.2]()

* Make sure that navigation elements that appear on multiple pages look and behave consistently. [More about 3.2.3]()

* Make sure that features that appear on multiple page are identified consistently. [More about 3.2.4]()

#### Help people avoid and correct mistakes

* When someone makes a mistake, provide an error message in text and make it obvious where the mistake was made. [More about 3.3.1]()

* Provide form labels to make it clear what information is expected, and optionally provide extra hints to help people avoid mistakes. [More about 3.3.2]()

* When someone makes a mistake give them suggestions on how to correct it, unless it compromises security. [More about 3.3.3]()

* If users are making a legal commitment, financial transaction, or updating personal data, give them a way to review and check the information they have entered. [More about 3.4.4]()

### 4. Robust

Your website/app must work with different web browsers and/or assistive technologies.

#### Make content compatible with different browsers and assistive technologies

* [WEB ONLY] Make sure the code of each page does not contain errors that are known to cause conflicts. [More about 4.1.1]()

* Make sure the code of each page enables assistive technologies to discover the purpose of every feature, the way that feature is identified, and the state it is currently in. [More about 4.1.2]()

* Make sure status messages are identified in code so that assistive technologies can convey them to users. [More about 4.1.3]()
