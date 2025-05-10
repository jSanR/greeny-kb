// MCU config
#define RP2040_FLASH_GD25Q64CS

// Split keyboard configs

// Master/slave detection (sea-picro specific)
#undef SPLIT_USB_DETECT
#define USB_VBUS_PIN GP19

// Serial communication
//#define SOFT_SERIAL_PIN GP0
//#define SERIAL_USART_TX_PIN GP0 

// Handness by EEPROM
//#define EE_HANDS
//#define MASTER_LEFT
#define MASTER_RIGHT

// Split configuration
// Matrix overrides for split to work
//#define MATRIX_ROWS 10
//#define MATRIX_COLS 6

//#define SERIAL_PIO_USE_PIO1
#define SERIAL_PIO_USE_PIO0
//#define SOFT_SERIAL_PIN GP0
//#define SERIAL_USART_TX_PIN GP0

//#define SERIAL_DEBUG
