# adapt-contrib-menuBox

**Menu Box** is a component version of the [Box Menu](https://github.com/adaptlearning/adapt-contrib-boxMenu) for when `config.json:_isPageMenu = true`. Allowing menus to act as pages in an Adapt course.

Requires: https://github.com/adaptlearning/adapt-contrib-core/pull/366
NOTE: Not supported in the AAT at this time.

## Settings Overview

The attributes listed below are used in *component.json*, *course.json* and *contentObjects.json* to configure **Menu Menu**, and are properly formatted as JSON in [*example.json*](https://github.com/cgkineo/adapt-contrib-menubox/blob/master/example.json).

### Attributes

#### *component.json*

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**\_component** (string): This value must be: `menuBox`.

**\_classes** (string): CSS class name to be applied to **Menu Box**’s containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**\_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full.
<div float align=right><a href="#top">Back to Top</a></div>

#### *course.json*
The following attributes, set within *course.json*, configure the defaults for **Box Menu**.

**\_globals** (object): The Globals object that contains value for **\_component**.

>**\_component** (object): The menu object that contains value for **\_menuBox**.

>>**\_menuBox** (object): The boxMenu object that contains value for **durationLabel**.

>>>**durationLabel** (string): Optional text which precedes **duration** (e.g., `"Duration:"`).

#### *contentObjects.json*
The following attributes, set within *contentObjects.json*, configure the defaults for **Menu Box**.

**\_menuBox** (object): The boxMenu object that contains value for **\_renderAsGroup**.

>**\_renderAsGroup** (boolean): Enable this option to render items into a group on the menu. Groups can display a title, body, and instruction text.

>Framework: Change the group content object type to `menu` and update the `_parentId` of the children content objects to match the group content object `_id`. Authoring Tool: Add a submenu and check the 'Enable as menu group?' setting. All users: If accessibility is required update the aria level values in config settings so the title hierarchy remains intact.

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

No known limitations.

----------------------------
<a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a><br>
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-contrib-boxmenu/graphs/contributors)<br>
**Accessibility support:** WAI AA<br>
**RTL support:** Yes<br>
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge, IE11, Safari 14 for macOS/iOS/iPadOS, Opera<br>
