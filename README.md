# Accessibility Guidelines v0.0.1

## Guidelines

Content
1. [Colour and contrast](#1-colour-and-contrast)
   * [Use of colour](#use-of-colour)
   * [Text contrast](#text-contrast)
   * [Contrast of non-text elements](#contrast-of-non-text-elements)
2. [Dynamic size and layout](#2-dynamic-size-and-layout)
3. [Structure and navigation](#3-structure-and-navigation)
4. [Form inputs](#4-form-inputs)
5. [Multiple ways to interact](#5-multiple-ways-to-interact)
6. [Language and instructions](#6-language-and-instructions)
7. [Notifications, overlays and interruptions](#7-notifications-overlays-and-interruptions)
8. [Images, audio, video and animation](#8-images-animations-audio-and-video)
9.  [Custom components](#9-custom-components)

### 1. Colour and contrast

#### Use of colour

* Colour is not used as the only way ....

* **Links styling**. Links in sentences or paragraphs have a contrast ratio of at least 3:1 with their surrounding text, and are also indicated by another visual cue beyond just colour (e.g. underline, weight, arrow, border). [More about Links styling](https://www.tesco.com).

#### Text contrast

* Text that is 18 points or larger has a contrast ratio of at least 3:1. Text that that is smaller than 18 points has a contrast ratio of at least 4.5:1.
<!-- Include 'bold' -->

See also: Links styling [LINK].

#### Contrast of non-text elements



### 2. Dynamic size and layout

#### Text resizing

* Zoom and scrolling are not disabled in web views in native apps.

* Native apps honour the text resizing preferences set by users' in the device's settings.

#### Content reflow when resizing

#### Device orientation

**Device orientation**. The orientation of content isn't locked. Content can be viewed horizontally or vertically. [More about Device orientation](https://www.tesco.com)

### 3. Structure and navigation

#### Title of page

* [Title of page](https://www.tesco.com). A unique and descriptibve title is displayed at the top of each screen, and is read out by screen readers.

#### Headings

##### [Headings are identified as headings in the code.](https://www.tesco.com)

Via `UIAccessibilityTraitHeader` in iOS, and `<h1> - <h6>` in HTML. Note: Text cannot be coded as a heading in Android apps.

##### [Text that doesn't represent a heading is not identified as a heading in code.](https://www.tesco.com)

**Only headings are headings in code**. Text that does not represent a heading is not identified as a heading in code. [More about 'Only headings are headings in code'](https://www.tesco.com)

[Correct heading level](https://www.tesco.com). In HTML, headings are assigned the correct heading level: the main page heading is coded with `<h1>`, its subheadings are coded with `<h2>`, subheadings of any `<h2>` are coded with `<h3>`, etc.


#### Lists

### 4. Form inputs

#### Labels for form inputs

#### Help text for form inputs

#### Input error messages

Note: for system errors, see [System messages and notifications](#system-messages-and-notifications).

#### Review step before submission

#### Input purpose

### 5. Multiple ways to interact

#### Keyboard

#### Voice and switch

#### Mouse and touch

#### Meaningful order

#### Motion triggers

### 6. Language and instructions

#### Easy to understand

#### Inclusive instructions

#### Language set in code

### 7. Notifications, overlays and interruptions

#### System messages and notifications

#### Time-outs

#### Focus management

#### Content on hover and focus

### 8. Images, animations, audio and video

#### Images

#### Audio

#### Video

#### Animations

### 9. Custom components

#### Coding custom components





