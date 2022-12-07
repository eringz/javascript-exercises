class StringLib
{
    concat(word, word_2) { 
        return word + word_2;
    }
    repeat(word, times) {
        let word2 = '';
        for(let i = 0; i < times; i++){
            word2 += word;
        }
        return word2;
    }
    toString(input) {
        return input + ''; 
    }
    charAt(word, index) {
        return word[index];
    }
}

module.exports = new StringLib;
