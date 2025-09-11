const notes = [
  "I love programming in JavaScript",
  "JavaScript is great for programming",
  "I love coding"
];

const freq = {};
const stopWords = ["i", "in", "is", "for", "and"];

notes.forEach((words) => {
    const word = words.split(" ");
    
    // const count = 0;
    word.forEach((w) => {
        const wLower = w.toLowerCase();
        if (stopWords.includes(wLower)) return;

        if (freq[wLower]) {
            freq[wLower] += 1
        } else {
            freq[wLower] = 1;
        }
    })
 
    
})
console.log(freq);
