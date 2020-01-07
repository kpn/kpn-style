# Icons

## Introduction
This Readme contains steps to create and update the icon font of KPN that is used in Grip.

## Structure
The source files are located in the folder `source` folder.
You will see a folder 'svgs' where all icons are stored in .svg.
The folder icoMoon source files contains source files that are created on icoMoon

## Examples
Run `npm run` and head to http://localhost:3000/base/icons.html for an overview of icons and usage examples
Or head over to http://gripstyles.nl/base/icons.html

## Overview
KPN icon font is generated in the IcoMoon App at https://icomoon.io
Icons are in svg files from https://design.kpn.com/d/bG0o8daqFnxy/kpn#/basics/icons-illustrations/downloads-ui-icons
Download the latest set

## Before you begin
Before we convert svg icons to a font, Make sure these steps are taken before you convert SVGs to an icon font:

#### Format filenames
Make sure filenames:

* are in lowercase
* that contains underscores are replaced with dashes
* remove version suffix (versions) i.e. delete-v1.svg = delete.svg

Changes made on 20180321_UI iconen.zip set:

* Renamed delete_v2.svg to delete-backward.svg
* Renamed settings_1_v1.svg to settings.svg
* Renamed settings.svg to settings-gear
* Renamed backword.svg to backward.svg

#### Check icons for duplicates or errors
There may be duplicate icons or icons with a wrong icon name.

Changes made on 20180321_UI iconen.zip set:

* Removed remove_diap_v3.svg because duplicates
* Renamed star_diap_v2.svg to ticket_diap.svg

20180321_UI iconen.zip has been expanded with other icons:
* Service/wrench (service.svg) / Grip specific icon
* Umbrella (umbrella.svg) / Grip specific icon

## Create an icon font
These are the steps to create an icon font out of the svgs. Make sure you take each step.

1. Proceed to https://icomoon.io/ and go to icoMoon App
2. Click on "Manage Project" (untitled project upon first visit)
3. Click on "Import Project" and upload the file assets/icons/source/KPN UI icons.json
4. Add, delete, rename icons
5. Click on Generate Font and then download the Font zip package.
6. Unzip this package and replaced the fonts in assets/icons/fonts with the ones in the zip file fonts/
7. Replace files of icoMoon source files with the ones in the zip file. These aren't used but as an alternative reference.
8. Open to base/_icons.scss and add/delete/edit the icon classes by using the styles.css of the downloaded zip file as a reference.
9. Add/delete/edit the new icon set in the example page icons overview.
10. Whenever the selection of icons has been changed, make sure to replace "KPN UI icons.json" with the new one on icoMoon by clicking to "Manage Project" and press download on the new set.
