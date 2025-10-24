function maskEmail(email) {
        if (email.includes('@')) {
        const splitEmail = email.split('@');
        const username = splitEmail[0];
        const domain = splitEmail[1];
        const firstLetter = username[0];
        const lastLetter = username[username.length - 1];
        const numMaskedChars = username.length - 2;
        
        if (numMaskedChars === 0) {
            return firstLetter + '*@' + domain;
        } else if (numMaskedChars === -1) {
            return '*@' + domain;
        } else if (numMaskedChars === -2 && domain.length === 0) {
            return 'Error: Problem exists in chair';
        } else if (domain.length === 0) {
            return 'Error: Missing domain';
        } else if (numMaskedChars === -2) {
            return 'Error: Missing username';
        } else {
            const maskedChars = '*'.repeat(numMaskedChars);
            return firstLetter + maskedChars + lastLetter + '@' + domain;
        }
    } else {
        return 'Error: Invalid input';
    }
}

let email = '@';

console.log(maskEmail(email));