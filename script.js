let mode = 'toRoman'; // O 'toDecimal'

function toggleMode() {
    mode = (mode === 'toRoman') ? 'toDecimal' : 'toRoman';
    document.getElementById('title').innerText = mode === 'toRoman' ? 'Decimal to Roman' : 'Roman to Decimal';
    document.getElementById('inputVal').placeholder = mode === 'toRoman' ? 'Ej. 155' : 'Ej. CLV';
    document.getElementById('inputVal').value = '';
    document.getElementById('result').innerText = 'Result: -';

    gtag('event', 'change_mode_click', {
        'event_category': 'interaction',
        'event_label': 'Cambiando direccion de conversion'
    });
    
    console.log('Event change_mode_click was sent');
}

function toRoman(num) {
    if (isNaN(num) || num <= 0 || num > 3999) return 'Invalid (1-3999)';
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (let i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

function toDecimal(roman) {
    roman = roman.toUpperCase();
    const lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let decimal = 0;
    for (let i = 0; i < roman.length; i++) {
        let cur = lookup[roman[i]];
        let next = lookup[roman[i+1]];
        if (next > cur) {
            decimal += (next - cur);
            i++;
        } else {
            decimal += cur;
        }
    }
    return isNaN(decimal) ? 'Invalid Roman' : decimal;
}

//function convertir() {
//    const val = document.getElementById('inputVal').value;
//    const resElement = document.getElementById('result');
//    if (!val) { resElement.innerText = 'Result: -'; return; }
//    
//    if (mode === 'toRoman') {
//        resElement.innerText = 'Result: ' + toRoman(parseInt(val));
//    } else {
//        resElement.innerText = 'Result: ' + toDecimal(val);
//    }
//}

function convertir() {
    const val = document.getElementById('inputVal').value;
    const resElement = document.getElementById('result');
    if (!val) { resElement.innerText = 'Result: -'; return; }
    
    let result;
    if (mode === 'toRoman') {
        result = toRoman(parseInt(val));
    } else {
        result = toDecimal(val);
    }

    resElement.innerText = 'Result: ' + result;

    if (result.toString().includes('Invalid')) {
        gtag('event', 'conversion_error', {
            'event_category': 'error',
            'event_label': val
        });
        console.log('Event conversion_error was sent');
    }
}
