# greeny

![greeny](full_outline.svg)

*A custom-made split keyboard with a 4x6 vertically staggered matrix and a 5-key thumb cluster*

* Keyboard Maintainer: [Jesus Sangama](https://github.com/jSanR)
* Hardware Supported: Sea-Picro (or any RP2040 board with [Sparkfun Promicro](https://www.sparkfun.com/sparkfun-pro-micro-rp2040.html) pinout)
* Hardware Availability: [beekeeb](https://shop.beekeeb.com/) and [aliexpress](https://aliexpress.com/)

Compilation example for this keyboard (after setting up your build environment):

    qmk compile -kb greeny -km default

Flashing example for this keyboard:

* Connect one side of the keyboard **(make sure the both sides are not connected)** and enter bootloader mode
* Wait for the OS to detect the deive. A new drive **RPI-RP2** should appear
* Flash via cli command (bl parameter depends on the side that is being flashed)

	qmk flash -kb greeny -km default -bl \[uf2-split-left|uf2-split-right\]
* The drive will dissapear and a few seconds later the keyboard side will be ready for use
* Repeat the process for the oposite side


See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the key at (0,0) in the matrix (usually the top left key or Escape) and plug in the keyboard
* **Physical reset button**: Hold the button below the MCU for more than 1 second
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available
