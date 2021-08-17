
const message = document.getElementById('message'),
    inputBalance = document.getElementById('inputBalance'),
    inputAmount = document.getElementById('inputAmount');


function convMobile(source, valNum) {
    'use strict';
    valNum = parseFloat(valNum);
    if (valNum !== '') {
        if (source === 'inputAmount') {
            inputBalance.value = Math.round((valNum * 0.7) * 100) / 100;
        }
        if (source === 'inputBalance' && valNum !== '') {
            inputAmount.value = Math.round(((valNum * 10) / 7) + 0.4);
        }
    } else {
        inputAmount.value = 0;
        inputBalance.value = 0;
    }
}

//negtive numbers
const numInput = document.querySelector('input');
// Listen for input event on numInput.
numInput.addEventListener('input', function(){
    // Let's match only digits.
    const num = this.value.match(/^\d+$/);
    if (num === null) {
        // If we have no match, value will be empty.
        this.value = "";
    }
}, false)
