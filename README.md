# Web Content Accessibility Guidelines Summary

This document will help you quickly get up to speed with the [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) (WCAG), and avoid common accessibility-related mistakes.

Click on each guideline to see details and code examples.

This summary is a simplification. If you're not sure how to meet a requirement, check the official [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/).

---

### 1. Easy to perceive

Your website/app must present information in ways that people can recognise and use, no matter how they consume content (for example if they have low vision, or use assistive technologies like a screen reader).

#### Provide text alternatives for images

* [Text alternatives for images](guidelines/1.1.1.md): Provide an alternative text description for images. Make sure the alternative description conveys the same message or functionality. (A-level) (Design) (Content) (Engineering)

#### Provide alternatives for audio content, videos and presentations

* [Transcript (for prerecorded audio-only content)](guidelines/1.2.1.md): For audio content that has no video (like a podcast), provide a transcript. (A-level) (Content)

* [Captions (for prerecorded videos and presentations)](guidelines/1.2.2.md): Provide captions for videos and presentations that are pre-recorded. (A-level) (Content)

* [Text or audio description (for prerecorded videos and presentations)](guidelines/1.2.3.md): For videos and presentations that are pre-recorded, provide an equivalent text description, or an audio description of what happens on screen. (A-level) (Content)

* [Captions (for live videos and presentations)](guidelines/1.2.2.md): Provide captions for videos and presentations that are performed live. [AA-level] (Content)

* [Audio description (for prerecorded videos and presentations)](guidelines/1.2.4.md): For videos and presentations that are pre-recorded, provide an audio description of what happens on screen, even if you've already provided a text description. [AA-level] (Content)

#### Create content that can be presented in different ways

* [Structure and relationships](guidelines/1.3.1.md): When designs convey a structure visually (like distinct sections within a page, or a label next to a checkbox) that structure must also be identified in code. (A-level) (Design) (Engineering)

* [Order of elements in code](guidelines/1.3.2.md): Make sure that elements appear in a logical reading order in code, so that they are presented in a meaningful order to screen reader users. (A-level) (Design) (Engineering)

* [Instructions don't rely on sensory characteristics](guidelines/1.3.3.md): When giving guidance or instructions, don't assume that users can perceive colour, size, shape, sound or the location of elements on screen. (A-level) (Design)

* [Orientation](guidelines/1.3.4.md): Make sure a page's view is not locked to either portrait or landscape mode, unless this is essential. (AA-level) (Design) (Engineering)

* [Purpose of text fields](guidelines/1.3.5.md): If a text input field collects information about the user, identify its specific purpose in code (e.g. email, password, street address). (AA-level) (Engineering)

#### Make content easy for people to see and hear

* [Use of colour](guidelines/1.4.1.md): Do not use colour as the only way to convey any piece of information. (A-level) (Design)

* [Audio control](guidelines/1.4.2.md): If any audio content plays automatically for more than three seconds, give people a way to stop it. (A-level) (Design)

* [Text contrast](guidelines/1.4.3.md): Make sure that text has enough contrast against the background colour. (AA-level) (Design)

* [Non-text contrast](guidelines/1.4.11.md): Make sure that visual information that identifies important graphics, interactive controls and their state has enough contrast against adjacent colours. (AA-level) (Design)

* [Resize text](guidelines/1.4.4.md): Make sure it is possible to complete all tasks when text is resized up to 200%. (AA-level) (Design) (Engineering)

* [Reflow](guidelines/1.4.10.md): Make sure users can access all information and functionality on a screen that's as wide as on the iPhone5, without needing to scroll in both directions. (AA-level) (Design) (Engineering)

* [Text spacing](guidelines/1.4.12.md): Ensure that no information or functionality gets lost if users increase the space between lines, paragraphs, letters and words. (AA-level) (Design) (Engineering)

* [Images of text](guidelines/1.4.5.md): Use real text rather than images of text. (AA-level) (Engineering)

* [Extra content on hover or focus](guidelines/1.4.13.md): If content (like a tooltip) appears when users hover over an element with their mouse (or tab to it with their keyboard), it must be easy to dismiss, easy to reach and remain visible. (AA-level) (Design) (Engineering)

---

### 2. Easy to operate

Your website/app must be easy to navigate and use, no matter how someone interacts with it.

For example people who don't use a mouse may use their voice, or press the 'Tab' key to move their keyboard's focus to interactive controls.

#### Make all functionality work with a keyboard

* [Keyboard](): Make sure every task can be completed using just a keyboard. (A-level) (Design) (Engineering)

* [No keyboard trap](): Make sure that keyboard-only users don't get trapped within any element. (A-level) (Design) (Engineering)

* [Keyboard shortcuts](): If you've added custom keyboard shortcuts, provide a way to switch off or remap these shortcuts. (A-level) (Design)

#### Make it work with other input methods beyond keyboard

* [Complex gestures](): Do not require complex gestures or using more than one finger to do things. (AA-level) (Design)

* [Touch or click activation](): Make sure that custom buttons or links do not activate as soon as they are touched, so that users can slide their finger or mouse away to cancel the action. (AA-level) (Engineering)

* [Label in name](): When an interactive control has a name on screen, make sure that assistive technologies (like Voice Control) know it by the same name (or a name that includes the name on screen). (AA-level) (Design) (Engineering)

* [Device motion](): If a feature uses the device's motion (like shaking or tilting), make sure that responses to these motions can be turned off, and that the feature can be used in another way. (AA-level) (Design) (Engineering)

#### Help people navigate and find content

* [Skip to main content](): Give keyboard and screen reader users a way to go directly to the page's main content. (Web only) (A-level) (Design)

* [Page titled](): Give every page a unique and helpful title that indicates the purpose of the page. (Web only) (A-level) (Design) (Engineering)

* [Focus order](): Make sure that interactive controls receive focus in an order that makes sense, when users navigate through them with the keyboard. (A-level) (Design) (Engineering)

* [Link purpose](): Make sure the purpose of every link is clear from the link text alone, or together with associated content (if screen readers recognise the association). (A-level) (Design) (Engineering)

* [Multiple ways to find a page](): Give people different ways of finding each page (like searching or browsing links), unless the page is a step in a process. (AA-level) (Design)

* [Focus visible](): Make sure that keyboard-only users can clearly see which interactive control is focused when they tab through them. (AA-level) (Design) (Engineering)

* [Heading and labels](): Provide headings and form labels that help people find content and complete tasks. (AA-level) (Design)

#### Give people enough time to read and use content

* [Timing adjustable](): If there is any time limit (like a session timeout), give people an easy way to extend it. (A-level) (Design)

* [Visual distractions](): Do not show anything that automatically blinks, scrolls, animates or updates frequently if it lasts more than 5 seconds. Or give people a way to stop it. (A-level) (Design)

#### Do not cause seizures

* [Flashes](): Do not show anything that flashes more than three times a second. (A-level) (Design) (Content)

---

### 3. Easy to understand

Your website/app must make it easy for people to understand information and how to complete tasks.

#### Make text easy to understand

* [Language of page](): In code, identify the language that the content of the page is written in (English for example). (A-level) (Content) (Engineering)

* [Language of parts](): If the page has content in more than one language (for example, if a page in English has a button labelled in Welsh), identify the language of each part in code. (AA-level) (Design) (Content) (Engineering)

#### Make things appear and behave in consistent, predictable ways

* [Changes on focus](): Make sure that just navigating to an interactive control with the keyboard doesn't trigger any action, and doesn't move the keyboard focus somewhere else. (A-level) (Design)

* [Changes on input](): Make sure that just changing the state of a form input (like a checkbox) does not cause anything surprising to happen (like submitting a form, or automatically moving the keyboard focus). (A-level) (Design)

* [Consistent navigation](): Make sure that navigation controls that appear on multiple pages (like links in a header) look and behave consistently. (AA-level) (Design)

* [Consistent feature names](): If a user interface component exists on multiple pages, make sure that the way it looks and the way it is named is consistent across pages. (AA-level) (Design)

#### Help people avoid and correct mistakes

* [Error identification](): When someone makes an error while filling a form, describe the error in text and clearly identify where the error is. (A-level) (Design)

* [Form labels and instructions](): Provide labels to make it clear how users should fill a form, and optionally provide extra hints to help them avoid errors. (A-level) (Design) (Engineering)

* [Error suggestions](): When someone makes an error while filling a form, give them suggestions on how to correct it. (AA-level) (Design)

* [Error prevention (legal, financial, data)](): If users are making a legal commitment, a financial transaction, or updating personal data, give them a way to review and check the information they've entered before submitting it. (AA-level) (Design)

---

### 4. Robust and compatible

Your website/app must work with different web browsers and/or assistive technologies.

* [Valid HTML](): Make sure the code of each page does not contain errors that are known to cause conflicts with assistive technologies (such as incorrect nesting of elements or duplicate ids). (Web only) (A-level) (Engineering)

* [Name, Role and State of interactive controls](): Make sure the code of each page enables assistive technologies to discover the purpose of every feature, the way that feature is identified, and the state it is currently in. (A-level) (Design) (Engineering)

* [Status messages](): Make sure status messages are identified in code, so that assistive technologies can convey them to users. (AA-level) (Design) (Engineering)
