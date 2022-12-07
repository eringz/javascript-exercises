module.exports = function (){
    return {
      concat: function(word1, word2) { 
           return word1 + word2;
      },
      repeat: function(word, times) {
        let word2 = '';
        for(let i = 0; i < times; i++){
            word2 += word;
        }
        return word2;
      },
      toString: function(input) {
           return input + ''; 
      },
      charAt: function(word, index) {
            return word[index];
      }
    }
  };