 function toReadable (number) {
    
    let ones = [
        'zero','one' , 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight',
        'nine'
    ];
    let teens = [
       'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen',
        'nineteen'
    ];

    let tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 
        'ninety'
    ];

    let hundreds = [
        'hundred'
    ];

    let result = ''

    if(number >= 100){
        result+= ones[Math.floor(number / 100)] + ' ' + [hundreds[0]] + ' '
        number %= 100
    }

    if(number >= 20){
        result+= tens[Math.floor(number / 10)] + ' '
        number %= 10
    }else if(number >= 10) {
        result += teens[number - 10] + ' ';
        number = 0
    }


    if(number > 0){
        result+= ones[number] + ' '
    }

    return result.trim()
}

const number = parseInt(process.argv[2],10); 
console.log(toReadable(number));