# Web Content Accessibility Guidelines Overview

This document will help you quickly get up to speed with Web Content Accessibility Guidelines 2.1 (WCAG), and avoid common mistakes people make when designing and developing both websites and native apps.

It gives a short description of the requirements you must meet to ensure that a website or app is accessible under the Public Sector Bodies Accessibility Regulation 2018, and to ensure clients meet their legal obligations under the 2010 Equality Act.

This summary is a simplification. If you're unsure about how to meet a requirement, check the [official Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/).

### Principle 1: Perceivable

Your website/app must present information in ways people can recognise and use, no matter how they consume content (by touch, sound or sight for example).

#### Provide text alternatives for images

* <strong>Text alternatives for images</strong>. Provide a text description for images, and make sure the description serves the same purpose as the image. [More about 1.1.1](/all.html#1-1-1-non-text-content-a)

#### Provide alternatives for audio content, videos and presentations

* <strong>Transcript for audio content</strong>. Provide a transcript for audio content that has no video. The transcript must serve the same purpose as the original content. [More about 1.2.1]()

* <strong>Captions for videos and presentations</strong>. The captions must include all dialogue and important sound-effects. [More about 1.2.2 and 1.2.4]()

* <strong>Text or audio description of videos and presentations</strong>. Provide a text or audio description of videos or presentations. The description must serve the same purpose as the original content. [More about 1.2.3]()

* <strong>Audio description of pre-recorded videos or presentations</strong>. If the video or presentation is prerecorded (rather than live), provide an audio description of the recording (even if you're already provided a text description). [More about 1.2.5]()

#### Create content that can be presented in different ways

* Make sure that the visual structure of information is conveyed in code, so that assistive technologies can understand it. [More about 1.3.1]()

<!-- ALTERNATIVE: * Use elements like headings, lists, tables, fieldsets and legends to make sure that assistive technologies understand the structure of the information presented on screen. [More about 1.3.1]() -->

* Make sure that elements appear in the a logical reading order in website's Document Object Model or the app's View Hierarchy. [More about 1.3.2]()

* Do not use colour, size, shape, sound or location as the only way to convey any instruction. [More about 1.3.3]()

* Make sure a page's view is not locked to either horizontal or vertical only, unless this is essential. [More about 1.3.4](guidelines/1.3.4.md)

* [WEB ONLY]. In forms that collect information <strong>about the user</strong>, add autocomplete attributes to identify the purpose of the input. [More about 1.3.5]()

#### Make content easy for people to see and hear

* Do not use colour as the only way to convey information of any kind. [More about 1.4.1]()

* Give people a way to stop audio content if it plays automatically and lasts longer than three seconds, or give them a way to change the volume without changing their system settings. [More about 1.4.2]()

* Make sure that text has enough contrast against the background colour. [More about 1.4.3]()

* Make sure it is possible to complete all tasks when text is resized up to 200%. [More about 1.4.4]()

* Do not use images that contain text (except logos). [More about 1.4.5]()

* All information and functionality must be available a screen that's 320 CCS pixel wide, without needing to scroll horizontally [More about 1.4.10]().

<!-- ALTERNATIVES
* Make sure content will reflow to a single column when zoomed and not produce scrolling in both directions. [More about 1.4.10]()

* All information and functionality must be available when 320 CSS pixel worth of concent fills the full width of the screen, without needing to scroll horizontally [More about 1.4.10](). -->

* Make sure that interactive controls (including visual elements that indicate their states) and important graphics have enough contrast against their adjacent colours. [More about 1.4.11]()

* Users that no information or functionality gets lost if users increase the space between lines, paragraphs, letters and words. [More about 1.4.12]()

* If extra content appears when users focus or hover an element, that extra content is easily dismissable, hoverable and persistent. [More about 1.4.13]()

### Principle 2: Operable

Your website/app must be navigable and usable no matter how someone uses it (without a mouse, with voice commands, or with a screen magnifier for example).

#### Make functionality work with a keyboard

* Make sure every task can be completed using just a keyboard. [More about 2.1.1]()

* Make sure that keyboard-only users don't get trapped within any element. [More about 2.1.2]()

* If you've added custom keyboard shortcuts, provide a way to switch off or remap these shortcuts. [More about 2.1.4]()

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

* If a feature uses shaking or tilting, make sure that it can also be activated in another way. And that responses to these motion can be turned off. [More about 2.5.4]()

### Principle 3: Understandable

Your website/app must make information understandable, and make it easy for people to understand how to complete tasks.

#### Make text readable and understandable

* Identify the language that the content is written in. [More about 3.1.1]()

* Identify any changes in language within the content. [More about 3.1.2]()

#### Make things appear and behave in consistent ways

* Do not any trigger important or disorientating change when an element just receives focus. [More about 3.2.1]()

* Do not any trigger important or disorientating change when someone just changes the value of an form input. [More about 3.2.2]()

* [WEB ONLY] Make sure that navigation elements that appear on multiple pages look and behave consistently. [More about 3.2.3]()

* [WEB ONLY] Make sure that navigation elements that appear on multiple page are identified consistently. [More about 3.2.4]()

#### Help people avoid and correct mistakes

* When someone makes a mistake, provide an error message in text and make it obvious where the mistake was made. [More about 3.3.1]()

* Provide form labels to make it clear what information is expected, and optionally provide extra hints to help people avoid mistakes. [More about 3.3.2]()

* When someone makes a mistake give them suggestions on how to correct it, unless it compromises security. [More about 3.3.3]()

* If users are making a legal commitment, financial transaction, or updating personal data, give them a way to review and check the information they have entered. [More about 3.4.4]()

### Principle 4: Robust

Your website/app must work with different web browsers and/or assistive technologies.

#### Make content compatible with different browsers and assistive technologies

* [WEB ONLY] Make sure the code of each page does not contain errors that are known to cause conflicts. [More about 4.1.1]()

* Make sure the code of each page enables assistive technologies to discover the purpose of every feature, the way that feature is identified, and the state it is currently in. [More about 4.1.2]()

* Make sure status messages are identified in code so that assistive technologies can convey them to users. [More about 4.1.3]()
