# greeny

![greeny](full_outline.svg)

*A custom-made split keyboard with a 4x6 vertically staggered matrix and a 5-key thumb cluster*

* Keyboard Maintainer: [Jesus Sangama](https://github.com/jSanR)
* Hardware Supported: Sea-Picro (or any RP2040 board with Sparkfun promicro pinout)
* Hardware Availability: [beekeeb](https://shop.beekeeb.com/) and [aliexpress](https://aliexpress.com/)

Make example for this keyboard (after setting up your build environment):

    make greeny:default

Flashing example for this keyboard:

    make greeny:default:flash

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the key at (0,0) in the matrix (usually the top left key or Escape) and plug in the keyboard
* **Physical reset button**: Hold the button below the MCU for more than 1 second
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available
