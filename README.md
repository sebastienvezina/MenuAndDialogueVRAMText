# Menu and Dialogue VRAM Text plugin

This plugin builds menus into the overlay while copying the complete background and, optionally, sprites, to the overlay giving the illusion that floating windows are open on top of the background. This plugin employs an alternative method of writing text that foregoes the built-in rolling buffer and instead copies a font tileset into VRAM and uses a character map to display text. This method allows for stacking menus without suffering wrapping text from the 52 characters limitation of the rolling buffer.

This plugin was made by combining the following: 

Advanced Dialog and Menu vB: https://github.com/dochardware/Advanced-Dialog-and-Menu

gbs-uiAltDisplayTextPlugin: https://github.com/Mico27/gbs-uiAltDisplayTextPlugin


This plugin requires to load a font tileset into VRAM using this plugin by Mico27:

gbs-loadTilesetExPlugin: https://github.com/Mico27/gbs-loadTilesetExPlugin
