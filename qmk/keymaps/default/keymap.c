// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H
#include "keymap_spanish_latin_america.h"

// Home row mods config
#define HR_SCTL LCTL_T(KC_S)
#define HR_DGUI LGUI_T(KC_D)
#define HR_FALT LALT_T(KC_F)

#define HR_JALT RALT_T(KC_J)
#define HR_KGUI RGUI_T(KC_K)
#define HR_LCTL RCTL_T(KC_L)

// Custom combos
#define BR_PTAB RCS(KC_TAB)
#define BR_NTAB C(KC_TAB)

// Tap Dance declarations
enum {
    D_A,
    D_E,
    D_I,
    D_O,
    D_U,
};

// Tap dance functions
void tap_dance_a(tap_dance_state_t *state, void *user_data) {
	switch (state->count) {
		case 1:
			tap_code(KC_A);
			break;
		case 2:
			tap_code(ES_ACUT);
			tap_code(KC_A);
			break;
	}
};

void tap_dance_e(tap_dance_state_t *state, void *user_data) {
	switch (state->count) {
		case 1:
			tap_code(KC_E);
			break;
		case 2:
			tap_code(ES_ACUT);
			tap_code(KC_E);
			break;
	}
};

void tap_dance_i(tap_dance_state_t *state, void *user_data) {
	switch (state->count) {
		case 1:
			tap_code(KC_I);
			break;
		case 2:
			tap_code(ES_ACUT);
			tap_code(KC_I);
			break;
	}
};

void tap_dance_o(tap_dance_state_t *state, void *user_data) {
	switch (state->count) {
		case 1:
			tap_code(KC_O);
			break;
		case 2:
			tap_code(ES_ACUT);
			tap_code(KC_O);
			break;
	}
};

void tap_dance_u(tap_dance_state_t *state, void *user_data) {
	switch (state->count) {
		case 1:
			tap_code(KC_U);
			break;
		case 2:
			tap_code(ES_ACUT);
			tap_code(KC_U);
			break;
	}
};

// Tap Dance definitions
tap_dance_action_t tap_dance_actions[] = {
    // Tap once for Escape, twice for Caps Lock
    [D_A] = ACTION_TAP_DANCE_FN(tap_dance_a),
    [D_E] = ACTION_TAP_DANCE_FN(tap_dance_e),
    [D_I] = ACTION_TAP_DANCE_FN(tap_dance_i),
    [D_O] = ACTION_TAP_DANCE_FN(tap_dance_o),
    [D_U] = ACTION_TAP_DANCE_FN(tap_dance_u),
};

enum layers {
	_BA, // base
	_GO, // games override
	_NV, // navigation
	_SY, // symbols
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /*
     * QWERTY
     * ,-----------------------------------------.                    ,-----------------------------------------.
     * |`/ESC |   1  |   2  |   3  |   4  |   5  |                    |   6  |   7  |   8  |   9  |   0  | Del  |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | Tab  |   Q  |   W  |   E  |   R  |   T  |                    |   Y  |   U  |   I  |   O  |   P  |  ´   |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * |LShift|   A  |S(CTL)|D(GUI)|F(ALT)|   G  |                    |   H  |J(ALT)|K(GUI)|L(CTL)|   Ñ  |RShift|
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | LCTL |   Z  |   X  |   C  |   V  |   B  |-------.     ,------|   N  |   M  |   ,  |   .  |   -  |  {   |
     * `-----------------------------------------/       /     \      \-----------------------------------------'
     *            | LCTL | LGUI | LALT | NAV  | /Space  /       \Enter \  | Bspc | SYMB | HOME | END  |
     *            |      |      |      |      |/       /         \      \ |      |      |      |      |
     *            `----------------------------------'           '------''---------------------------'
     */  
    [_BA] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        QK_GESC,KC_1,	KC_2,	KC_3,	KC_4,	KC_5,						KC_6,	KC_7,	KC_8,	KC_9,	KC_0,	KC_DEL,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        KC_TAB,	KC_Q,	KC_W,	TD(D_E),KC_R,	KC_T,						KC_Y,	TD(D_U),TD(D_I),TD(D_O),KC_P,	ES_ACUT,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        SC_LSPO,TD(D_A),HR_SCTL,HR_DGUI,HR_FALT,KC_G,						KC_H,	HR_JALT,HR_KGUI,HR_LCTL,ES_NTIL,SC_RSPC,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        KC_LCTL,KC_Z,	KC_X,	KC_C,	KC_V,	KC_B,						KC_N,	KC_M,	KC_COMM,KC_DOT,	ES_MINS,ES_LCBR,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					KC_LCTL,KC_LGUI,KC_LALT,MO(_NV),KC_SPC,		KC_ENT,	KC_BSPC,MO(_SY),KC_HOME,KC_END
    //				   `-----------------------------------------´ `---------------------------------------´
    ),  
    [_GO] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        _______,_______,_______,_______,_______,_______,					_______,_______,_______,_______,_______,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,_______,					_______,_______,_______,_______,_______,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,KC_S,	KC_D,	KC_F,	_______,					_______,KC_J,	KC_K,	KC_L,	_______,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,_______,					_______,_______,_______,_______,_______,_______,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					_______,_______,_______,_______,_______,	_______,_______,_______,_______,_______
    //				   `-----------------------------------------´ `---------------------------------------´
    ),         
    [_NV] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        _______,KC_F1,	KC_F2,	KC_F3,	KC_F4,	KC_F5,						KC_F6,	KC_F7,	KC_F8,	KC_F9,	KC_F10,	KC_F12,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,MS_BTN2,MS_UP,	MS_BTN1,A(KC_F1),					C(KC_X),BR_PTAB,BR_NTAB,_______,_______,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,MS_LEFT,MS_DOWN,MS_RGHT,KC_PGUP,					C(KC_C),KC_LEFT,KC_DOWN,KC_UP,	KC_RGHT,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,_______,_______,_______,_______,KC_PGDN,					C(KC_V),C(KC_Z),KC_HOME,KC_END,	_______,_______,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					_______,_______,_______,MO(_NV),_______,	_______,_______,TG(_GO),_______,_______
    //				   `-----------------------------------------´ `---------------------------------------´
    ),
    /*
     * SYMBOLS
     * ,-----------------------------------------.                    ,-----------------------------------------.
     * |  |   |   1  |   2  |   3  |   4  |   5  |                    |   6  |   7  |   8  |   9  |   0  | Del  |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | Tab  |      |      |      |      |      |                    |   @  |   /  |   &  |   *  |   `  |  ´   |
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * |LShift|      |      |      |      |      |                    |   ?  |   :  |   =  |   +  |   "  |RShift|
     * |------+------+------+------+------+------|                    |------+------+------+------+------+------|
     * | LCTL |   <  |      |      |      |      |-------.     ,------|   ¿  |   !  |   ,  |   |  |   '  |  {   |
     * `-----------------------------------------/       /     \      \-----------------------------------------'
     *            | LCTL | LGUI | LALT |      | /Space  /       \Enter \  | Bspc | BASE | HOME | END  |
     *            |      |      |      |      |/       /         \      \ |      |      |      |      |
     *            `----------------------------------'           '------''---------------------------'
     */      
    [_SY] = LAYOUT(
    // ,-----------------------------------------------.				   ,-----------------------------------------------.
        ES_PIPE,KC_1,	KC_2,	KC_3,	KC_4,	KC_5,						KC_6,	KC_7,	KC_8,	KC_9,	KC_0,	KC_DEL,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,					ES_AT,	ES_SLSH,ES_AMPR,ES_ASTR,ES_GRV,	ES_CIRC,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,					ES_QUES,ES_COLN,ES_EQL,	ES_PLUS,ES_DQUO,_______,
    // |-------+-------+-------+-------+-------+-------|				   |-------+-------+-------+-------+-------+-------|
        _______,ES_LABK,XXXXXXX,XXXXXXX,XXXXXXX,XXXXXXX,					ES_IQUE,ES_EXLM,ES_PIPE,ES_MINS,ES_QUOT,_______,
    // `---------------+-------+-------+-------+-------+---------. ,-------+-------+-------+-------+-------+---------------´
    					_______,_______,_______,XXXXXXX,_______,	_______,_______,MO(_SY),_______,_______
    //				   `-----------------------------------------´ `---------------------------------------´
    ),    
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
