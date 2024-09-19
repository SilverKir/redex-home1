import { Validator } from "../Validator";
const validator = new Validator();

test.each([
    ['yuJKKyu', true],
    ['yui7_u-t', true],
    ['Привет', false],
    ['&regular', false],
    ['uiuino_', false],
    ['0nojkhkj-', false],
    ['no6576hj', false],
    ['n[oh)j', false],
    ['Tjо5_hjk', false],
    ['Tjo5_h-j666k', true],

])('testing Validator with %s username', (username, expected) => {

    expect(validator.validateUsername(username)).toBe(expected);
});
