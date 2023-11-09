import { $ } from '@wdio/globals'
import Page from './page.js';

const RESULT_DISPLAY_ID: string = 'id=com.google.android.calculator:id/result_preview';

const CALCULATOR_KEY_SELECTOR: { [id: string]: string; } = {
    '0': 'id=com.google.android.calculator:id/digit_0',
    '1': 'id=com.google.android.calculator:id/digit_1',
    '2': 'id=com.google.android.calculator:id/digit_2',
    '3': 'id=com.google.android.calculator:id/digit_3',
    '4': 'id=com.google.android.calculator:id/digit_4',
    '5': 'id=com.google.android.calculator:id/digit_5',
    '6': 'id=com.google.android.calculator:id/digit_6',
    '7': 'id=com.google.android.calculator:id/digit_7',
    '8': 'id=com.google.android.calculator:id/digit_8',
    '9': 'id=com.google.android.calculator:id/digit_9',
    '+': 'id=com.google.android.calculator:id/op_add',
    '-': 'id=com.google.android.calculator:id/op_sub',
    '*': 'id=com.google.android.calculator:id/op_mul',
    '/': 'id=com.google.android.calculator:id/op_div',
    '=': 'id=com.google.android.calculator:id/eq',
    '.': 'id=com.google.android.calculator:id/dec_point',
    'AC': 'id=com.google.android.calculator:id/clr',
    '()': 'id=com.google.android.calculator:id/parens',
    'DEL': 'id=com.google.android.calculator:id/del',
    'SQRT': 'id=com.google.android.calculator:id/op_sqrt',
    'PI': 'id=com.google.android.calculator:id/const_pi',
    'POW': 'id=com.google.android.calculator:id/op_pow',
    '!': 'id=com.google.android.calculator:id/fact',
}

/**
 * Calculator page class
 */
class CalculatorPage extends Page {
    /**
     * Get button element by key
     * @param {string} buttonKey
     */
    public getButton(buttonKey: string) {
        return $(CALCULATOR_KEY_SELECTOR[buttonKey]);
    }
    /**
     * Press button
     * @param {string} buttonKey
     */
    async pressButton(buttonKey: string) {
        await this.getButton(buttonKey).click();
    }

    async result() {
        await $(RESULT_DISPLAY_ID).isExisting();
        return $(RESULT_DISPLAY_ID).getText();
    }
}

export default new CalculatorPage();