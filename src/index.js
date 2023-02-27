module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    num = String(number)
    if (number < 20){
        return ones[number];
    }
    if (number >= 20 && number <= 90 && !(number%10)){
        return tens[number/10];
    }
    if (number >= 100 && !(number%100)){
        return `${ones[num[0]]}` + ` hundred`;
    } else if (number <= 100 && number%100){
        return `${tens[num[0]]}` + ` ${ones[num[1]]}`;
    }
    if (number >= 100 && !(number%10) && (num[1]+num[2]) > 10){
        return `${ones[num[0]]}` + ` hundred` + ` ${tens[num[1]]}`;
    } else if (number >= 100 && !(number%10) && (num[1]+num[2]) == 10){
        return `${ones[num[0]]}` + ` hundred` + ` ${ones[num[1]+num[2]]}`;
    } else if (number >= 100 && number%10 && (num[2]) < 10 && (num[1] < 1)){
        return `${ones[num[0]]}` + ` hundred` + ` ${ones[num[2]]}`;
    } else if (number >= 100 && number%10 && (num[1]+num[2]) >= 20){
        return `${ones[num[0]]}` + ` hundred` + ` ${tens[num[1]]}` + ` ${ones[num[2]]}`;
    } else if (number >= 100 && number%10 && (num[1]+num[2]) <= 20){        
        return `${ones[num[0]]}` + ` hundred` + ` ${ones[num[1]+num[2]]}`;
    }
}
