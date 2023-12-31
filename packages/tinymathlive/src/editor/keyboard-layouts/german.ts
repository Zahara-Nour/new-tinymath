import { KeyboardLayout } from './types';

export const APPLE_GERMAN: KeyboardLayout = {
  id: 'apple.german',
  locale: 'de',
  displayName: 'German',
  virtualLayout: 'qwertz',
  platform: 'apple',
  score: 0,
  mapping: {
    KeyA: ['a', 'A', 'å', 'Å'],
    KeyB: ['b', 'B', '∫', '‹'],
    KeyC: ['c', 'C', 'ç', 'Ç'],
    KeyD: ['d', 'D', '∂', '™'],
    KeyE: ['e', 'E', '€', '‰'],
    KeyF: ['f', 'F', 'ƒ', 'Ï'],
    KeyG: ['g', 'G', '©', 'Ì'],
    KeyH: ['h', 'H', 'ª', 'Ó'],
    KeyI: ['i', 'I', '⁄', 'Û'],
    KeyJ: ['j', 'J', 'º', 'ı'],
    KeyK: ['k', 'K', '∆', 'ˆ'],
    KeyL: ['l', 'L', '@', 'ﬂ'],
    KeyM: ['m', 'M', 'µ', '˘'],
    KeyN: ['n', 'N', '~', '›'],
    KeyO: ['o', 'O', 'ø', 'Ø'],
    KeyP: ['p', 'P', 'π', '∏'],
    KeyQ: ['q', 'Q', '«', '»'],
    KeyR: ['r', 'R', '®', '¸'],
    KeyS: ['s', 'S', '‚', 'Í'],
    KeyT: ['t', 'T', '†', '˝'],
    KeyU: ['u', 'U', '¨', 'Á'],
    KeyV: ['v', 'V', '√', '◊'],
    KeyW: ['w', 'W', '∑', '„'],
    KeyX: ['x', 'X', '≈', 'Ù'],
    KeyY: ['z', 'Z', 'Ω', 'ˇ'],
    KeyZ: ['y', 'Y', '¥', '‡'],
    Digit1: ['1', '!', '¡', '¬'],
    Digit2: ['2', '"', '“', '”'],
    Digit3: ['3', '§', '¶', '#'],
    Digit4: ['4', '$', '¢', '£'],
    Digit5: ['5', '%', '[', 'ﬁ'],
    Digit6: ['6', '&', ']', '^'],
    Digit7: ['7', '/', '|', '\\'],
    Digit8: ['8', '(', '{', '˜'],
    Digit9: ['9', ')', '}', '·'],
    Digit0: ['0', '=', '≠', '¯'],
    Space: [' ', ' ', ' ', ' '],
    Minus: ['ß', '?', '¿', '˙'],
    Equal: ['´', '`', "'", '˚'],
    BracketLeft: ['ü', 'Ü', '•', '°'],
    BracketRight: ['+', '*', '±', ''],
    Backslash: ['#', "'", '‘', '’'],
    Semicolon: ['ö', 'Ö', 'œ', 'Œ'],
    Quote: ['ä', 'Ä', 'æ', 'Æ'],
    Backquote: ['<', '>', '≤', '≥'],
    Comma: [',', ';', '∞', '˛'],
    Period: ['.', ':', '…', '÷'],
    Slash: ['-', '_', '–', '—'],
    NumpadDivide: ['/', '/', '/', '/'],
    NumpadMultiply: ['*', '*', '*', '*'],
    NumpadSubtract: ['-', '-', '-', '-'],
    NumpadAdd: ['+', '+', '+', '+'],
    NumpadDecimal: [',', ',', '.', '.'],
    IntlBackslash: ['^', '°', '„', '“'],
    NumpadEqual: ['=', '=', '=', '='],
  },
};

export const WINDOWS_GERMAN: KeyboardLayout = {
  id: 'windows.german',
  locale: 'de',
  displayName: 'German',
  platform: 'windows',
  virtualLayout: 'qwertz',
  score: 0,
  mapping: {
    KeyA: ['a', 'A', '', ''],
    KeyB: ['b', 'B', '', ''],
    KeyC: ['c', 'C', '', ''],
    KeyD: ['d', 'D', '', ''],
    KeyE: ['e', 'E', '€', ''],
    KeyF: ['f', 'F', '', ''],
    KeyG: ['g', 'G', '', ''],
    KeyH: ['h', 'H', '', ''],
    KeyI: ['i', 'I', '', ''],
    KeyJ: ['j', 'J', '', ''],
    KeyK: ['k', 'K', '', ''],
    KeyL: ['l', 'L', '', ''],
    KeyM: ['m', 'M', 'µ', ''],
    KeyN: ['n', 'N', '', ''],
    KeyO: ['o', 'O', '', ''],
    KeyP: ['p', 'P', '', ''],
    KeyQ: ['q', 'Q', '@', ''],
    KeyR: ['r', 'R', '', ''],
    KeyS: ['s', 'S', '', ''],
    KeyT: ['t', 'T', '', ''],
    KeyU: ['u', 'U', '', ''],
    KeyV: ['v', 'V', '', ''],
    KeyW: ['w', 'W', '', ''],
    KeyX: ['x', 'X', '', ''],
    KeyY: ['z', 'Z', '', ''],
    KeyZ: ['y', 'Y', '', ''],
    Digit1: ['1', '!', '', ''],
    Digit2: ['2', '"', '²', ''],
    Digit3: ['3', '§', '³', ''],
    Digit4: ['4', '$', '', ''],
    Digit5: ['5', '%', '', ''],
    Digit6: ['6', '&', '', ''],
    Digit7: ['7', '/', '{', ''],
    Digit8: ['8', '(', '[', ''],
    Digit9: ['9', ')', ']', ''],
    Digit0: ['0', '=', '}', ''],
    Space: [' ', ' ', '', ''],
    Minus: ['ß', '?', '\\', 'ẞ'],
    Equal: ['´', '`', '', ''],
    BracketLeft: ['ü', 'Ü', '', ''],
    BracketRight: ['+', '*', '~', ''],
    Backslash: ['#', "'", '', ''],
    Semicolon: ['ö', 'Ö', '', ''],
    Quote: ['ä', 'Ä', '', ''],
    Backquote: ['^', '°', '', ''],
    Comma: [',', ';', '', ''],
    Period: ['.', ':', '', ''],
    Slash: ['-', '_', '', ''],
    NumpadDivide: ['/', '/', '', ''],
    NumpadMultiply: ['*', '*', '', ''],
    NumpadSubtract: ['-', '-', '', ''],
    NumpadAdd: ['+', '+', '', ''],
    IntlBackslash: ['<', '>', '|', ''],
  },
};

export const LINUX_GERMAN: KeyboardLayout = {
  id: 'linux.german',
  locale: 'de',
  displayName: 'German',
  platform: 'windows',
  virtualLayout: 'qwertz',
  score: 0,
  mapping: {
    KeyA: ['a', 'A', 'æ', 'Æ'],
    KeyB: ['b', 'B', '“', '‘'],
    KeyC: ['c', 'C', '¢', '©'],
    KeyD: ['d', 'D', 'ð', 'Ð'],
    KeyE: ['e', 'E', '€', '€'],
    KeyF: ['f', 'F', 'đ', 'ª'],
    KeyG: ['g', 'G', 'ŋ', 'Ŋ'],
    KeyH: ['h', 'H', 'ħ', 'Ħ'],
    KeyI: ['i', 'I', '→', 'ı'],
    KeyJ: ['j', 'J', '̣', '̇'],
    KeyK: ['k', 'K', 'ĸ', '&'],
    KeyL: ['l', 'L', 'ł', 'Ł'],
    KeyM: ['m', 'M', 'µ', 'º'],
    KeyN: ['n', 'N', '”', '’'],
    KeyO: ['o', 'O', 'ø', 'Ø'],
    KeyP: ['p', 'P', 'þ', 'Þ'],
    KeyQ: ['q', 'Q', '@', 'Ω'],
    KeyR: ['r', 'R', '¶', '®'],
    KeyS: ['s', 'S', 'ſ', 'ẞ'],
    KeyT: ['t', 'T', 'ŧ', 'Ŧ'],
    KeyU: ['u', 'U', '↓', '↑'],
    KeyV: ['v', 'V', '„', '‚'],
    KeyW: ['w', 'W', 'ł', 'Ł'],
    KeyX: ['x', 'X', '«', '‹'],
    KeyY: ['z', 'Z', '←', '¥'],
    KeyZ: ['y', 'Y', '»', '›'],
    Digit1: ['1', '!', '¹', '¡'],
    Digit2: ['2', '"', '²', '⅛'],
    Digit3: ['3', '§', '³', '£'],
    Digit4: ['4', '$', '¼', '¤'],
    Digit5: ['5', '%', '½', '⅜'],
    Digit6: ['6', '&', '¬', '⅝'],
    Digit7: ['7', '/', '{', '⅞'],
    Digit8: ['8', '(', '[', '™'],
    Digit9: ['9', ')', ']', '±'],
    Digit0: ['0', '=', '}', '°'],
    Enter: ['\r', '\r', '\r', '\r'],
    Escape: ['\u001b', '\u001b', '\u001b', '\u001b'],
    Backspace: ['\b', '\b', '\b', '\b'],
    Tab: ['\t', '', '\t', ''],
    Space: [' ', ' ', ' ', ' '],
    Minus: ['ß', '?', '\\', '¿'],
    Equal: ['́', '̀', '̧', '̨'],
    BracketLeft: ['ü', 'Ü', '̈', '̊'],
    BracketRight: ['+', '*', '~', '¯'],
    Backslash: ['#', "'", '’', '̆'],
    Semicolon: ['ö', 'Ö', '̋', '̣'],
    Quote: ['ä', 'Ä', '̂', '̌'],
    Backquote: ['̂', '°', '′', '″'],
    Comma: [',', ';', '·', '×'],
    Period: ['.', ':', '…', '÷'],
    Slash: ['-', '_', '–', '—'],
    PrintScreen: ['', '', '', ''],
    PageUp: ['/', '/', '/', '/'],
    NumpadMultiply: ['*', '*', '*', '*'],
    NumpadSubtract: ['-', '-', '-', '-'],
    NumpadAdd: ['+', '+', '+', '+'],
    Numpad1: ['', '1', '', '1'],
    Numpad2: ['', '2', '', '2'],
    Numpad3: ['', '3', '', '3'],
    Numpad4: ['', '4', '', '4'],
    Numpad5: ['', '5', '', '5'],
    Numpad6: ['', '6', '', '6'],
    Numpad7: ['', '7', '', '7'],
    Numpad8: ['', '8', '', '8'],
    Numpad9: ['', '9', '', '9'],
    Numpad0: ['', '0', '', '0'],
    NumpadDecimal: ['', ',', '', ','],
    IntlBackslash: ['<', '>', '|', '̱'],

    AltRight: ['\r', '\r', '\r', '\r'],
    MetaRight: ['.', '.', '.', '.'],
  },
};
