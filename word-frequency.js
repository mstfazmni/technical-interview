const getWordsFrequency = (sentence) => {

    const words = sentence.split(" ");
    const freq = {};

    console.log(words);

    words.forEach((word) => {{
        if (freq[word]) {
            freq[word] = freq[word] + 1;
        } else {
            freq[word] = 1;
        }
    }});

    console.log(freq)
    
  
}

getWordsFrequency("I I love coding and JavaScript");

