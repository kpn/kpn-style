# Changelog
All notable changes to KPN Style will be documented in this file.

## v1.17.0 - 5 February 2020
- Adds display property [helper classes](/#/base/common)
- Adds the ability to place text in [Top bar action menu](/#/layout/top-bar) 

This update also adds new features for the portal itself, for example: accesability tests, tabs and table of contents to improve the page structure. 

## v1.16.0 - 7 January 2020
- [Table](/#/component/table) cell content will now be vertical aligned at the top.
- [UI icon](/#/base/ui-icon) sizes are changed to follow KPN designs. `ui--small` to 18px, `ui--large` to 36px.
- Some visual and functional portal changes and fixes.

## v1.15.0 - 12 November 2019
- [Slider](/#/component/slider) (input range) component has been added.
- Eliminated vertical text alignment differences between MacOS and Windows for the breadcrumb component.
- The class `table__col-shrinked` has been replaced with `table__col-shrank`. The old form has been deprecated and will be removed within a few releases. The change has been made to correct the grammar.
- Made preparations to go open source. (Licensed as MIT)
- Various content changes have been made in the documentation.

## v1.14.0 - 17 October 2019

### Features

- [Service icon](/#/base/service-icon) have had a big update. They are no longer deprecated as a whole within KPN Style. Instead, we are going to move towards supporting all of the Service Icons provided by KPN UX Lab. They have all been added. As to not break backward compatibility, we have taken two measures: we kept the prefix `si-` instead of `service-` and all of the "old" icon names are still supported (albeit deprecated).
- Internal: added StyleLint to our own project to maintain high code quality as we move forward with the collaborative maintenance of KPN Style. Some refactors have been made that will not impact the output to comply fully with the linting rules.
- Internal: TypeScript support has been added within KPN Style to prepare for future functionalities. Corresponding linting rules have also been added.

## v1.13.0 - 18 September 2019

### Features

- Moves Hyperlinks to own component and adds style for Hyperlink with [UI icon](/#/base/ui-icon).

### Bug fixes

- Fixes top bar action action menu that was behind the content.
- Improves alignment for radio and checkbox with label that spans multiple text lines.
- Adds missing space between top bar item with icon and text.

## v1.12.1 - 28 August 2019

### Bug fixes

- Corrects the bug where label-for within an input field is always red.
- Fixes the error where an active nested side bar could not be visible.

## v1.12.0 - 26 August 2019

### Features

- Adds support for input validation on checkbox and radio inputs.
- Adds the possibility for notifications with advanced content. **Breaking change:** .notification\_\_body is now .notification\_\_header.
- Adds mixin to remove margin bottom of last children.
- Introduces shared animations.
- Adds button with progress spinner built-in.

## v1.11.0 - 1 August 2019

### Features

- Adds modal to show information as a layer over the current content.
- Adds support for a logo in the footer.

### Bug fixes

- Adds the missing classes to activate dialog and backdrop.
- Removes unwanted margin if there is only one button in a button group.

## v1.10.0 - 30 July 2019

### Features

- Adds progress bar and text helper for progress spinner. **Breaking change**: Removes inline progress spinner variant.
- Adds support for native select element.

### Bug fixes

- Adds missing margin bottom to accordion.

### Refactor

- Adds arrow up to expanded top bar link instead of nothing.

## v1.9.0 - 25 July 2019

### Features

- Adds support for mobile mega menu. **Breaking change**: changes menu trigger.
- Adds tooltip for (form) input with label.
- Adds the possibility to manually move the side bar.
- Initialization of react-scripts.

## v1.8.0 - 17 July 2019

### Features

- *Breaking change* - Removes &#x27;xs-&#x27; prefix for responsive columns and adds auto columns, responsive reverse and row spread.
- Adds accordion (aka expansion panel) to display content in a compact way.
- Adds functionalities like fixed mega menu to web layout and desired shadows to the corresponding compoents.
- Adds tall container and main container for common scenarios.

### Bug fixes

- Improves several small things like alignment in breadcrumb and input.

### Refactor

- *Breaking change* - Changes classes like block__text with the p element.

## v1.7.0 - 10 July 2019

### Features

- Adds responsive helper classes to hide or show elements.
- Adds support for (user account) link in side bar action bar.
- Adds support for blue pitch.

### Bug fixes

- Fixes broken action menu in top bar.

## v1.6.0 - 3 July 2019

### Features

- Adds sub menu for (the experimental) mega menu.
- Adds block component that attracts attention.
- Adds style for media objects to keep them in certain aspect ratios.
- Adds margin-auto helper class to common and adds blue pitch variant.
- Makes web layout available.

### Bug fixes

- Green active/hover border alignment for top bar and mega menu on HDPI screens.
- Adds more padding for the next pitch when there is an arrow above.
- Improves padding between checkmark and text.
- Moves backdrop to layout because it fits better with the layout category.
- Improves the transition when opening and closing the side bar.
- Fixes banner height with box-sizing.

## v1.5.0 - 20 June 2019

### Features

- Renews jumbotron and moves from component to layout.
- Adds tile for call to actions.
- Adds support for web layout.

### Bug fixes

- Fixes repeating banner background and adds margin bottom for jumbotron.
- Fixes z-index for top bar action menu.

## v1.4.0 - 13 June 2019

### Features

- Adds support for mobile side bar.
- Adds trigger for mobile side bar.
- Improves shadow mixin with three shadow levels.

## v1.3.0 - 29 May 2019

### Features

- Adds margin and padding helper classes.
- Adds footer for KPN websites.
- Adds support for sub menu in top bar.

### Bug fixes

- Hides mouseover content on small screens.
- Prevents side bar deeper child icons from being affected. Fixes gray background for buttons that are using button reset.

## v1.2.0 - 14 May 2019

### Features

- Adds pitch block.
- Adds banner for images with KPN circle effect.
- Adds mouseover component for short information.
- Improves container with center option and adds helpers classes in common.
- Adds list with green checkmarks.

### Bug fixes

- Fixes an error in the media query where there was no overlap between screen sizes.

## v1.1.1 - 7 May 2019

### Bug fixes

- Removes right margin for mobile buttons in .button-group--respond.
- Improves icon selector to make it work if it is not assigned as first class.
- Adds display block to elements that are displayed inline by default.

## v1.1.0 - 18 April 2019

### Features

- Adds dialog and backdrop component.
- Adds group for buttons to position a series of buttons.
- Adds support for multiple body-elements with content and cards.
- Adds support for icon in links and support for multiple menus.

### Bug fixes

- Notifications where stacked to close to each other and fixes wrong routing to coding conventions.
