// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H
#include "keymap_spanish_latin_america.h"

enum layers {
	_BASE,
	_NV,
	_SY,
};

// Home row mods config
#define HR_SCTL LCTL_T(KC_S)
#define HR_DGUI LGUI_T(KC_D)
#define HR_FALT LALT_T(KC_F)

#define HR_JALT RALT_T(KC_J)
#define HR_KGUI RGUI_T(KC_K)
#define HR_LCTL RCTL_T(KC_L)

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /*
     * QWERTY
     * ,-----------------------------------------.                    ,-----------------------------------------.
     * |`/ESC |   1  |   2  |   3  |   4  |   5  |                    |   6  |   7  |   8  |   9  |   0  | Bspc |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | Tab  |   Q  |   W  |   E  |   R  |   T  |                    |   Y  |   U  |   I  |   O  |   P  | Del  |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * |LShift|   A  |S(CTL)|D(GUI)|F(ALT)|   G  |                    |   H  |J(ALT)|K(GUI)|L(CTL)|   Ñ  |RShift|
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | LCTL |   Z  |   X  |   C  |   V  |   B  |-------.     ,------|   N  |   M  |   ,  |   .  |   -  |  {   |
     * `-----------------------------------------/       /     \      \-----------------------------------------'
     *            | LCTL | LGUI | LALT | LAY1 | /Space  /       \Enter \  | LAY2 | RALT | HOME | END  |
     *            |      |      |      |      |/       /         \      \ |      |      |      |      |
     *            `----------------------------------'           '------''---------------------------'
     */
    [_BASE] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        QK_GESC,KC_1,	KC_2,	KC_3,	KC_4,	KC_5,						KC_6,	KC_7,	KC_8,	KC_9,	KC_0,	KC_DEL,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        KC_TAB,	KC_Q,	KC_W,	KC_E,	KC_R,	KC_T,						KC_Y,	KC_U,	KC_I,	KC_O,	KC_P,	ES_PLUS,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        SC_LSPO,KC_A,	HR_SCTL,HR_DGUI,HR_FALT,KC_G,						KC_H,	HR_JALT,HR_KGUI,HR_LCTL,ES_NTIL,SC_RSPC,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        KC_LCTL,KC_Z,	KC_X,	KC_C,	KC_V,	KC_B,						KC_N,	KC_M,	KC_COMM,KC_DOT,	ES_MINS,KC_LBRC,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					KC_LCTL,KC_LGUI,KC_LALT,MO(_NV),KC_SPC,		KC_ENT,	KC_BSPC,XXXXXXX,KC_HOME,KC_END
    //				   `-----------------------------------------´ `---------------------------------------´
    ),
    [_NV] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        _______,KC_F1,	KC_F2,	KC_F3,	KC_F4,	KC_F5,						KC_F6,	KC_F7,	KC_F8,	KC_F9,	KC_F10,	KC_F12,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,_______,					_______,_______,_______,_______,_______,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,_______,					_______,KC_LEFT,KC_DOWN,KC_UP,	KC_RGHT,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,_______,					_______,KC_HOME,KC_END,	_______,_______,_______,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					_______,_______,_______,MO(_NV),_______,	_______,XXXXXXX,_______,_______,_______
    //				   `-----------------------------------------´ `---------------------------------------´
    )
};

// Debug matrix position of keypresses
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
  // If console is enabled, it will print the matrix position and status of each key pressed
#ifdef CONSOLE_ENABLE
    uprintf("KL: kc: 0x%04X, col: %2u, row: %2u, pressed: %u, time: %5u, int: %u, count: %u\n", keycode, record->event.key.col, record->event.key.row, record->event.pressed, record->event.time, record->tap.interrupted, record->tap.count);
#endif 
  return true;
}


void keyboard_post_init_user(void) {
  // Customise these values to desired behaviour
  //debug_enable=true;
  //debug_matrix=true;
  //debug_keyboard=true;
  //debug_mouse=true;
}
