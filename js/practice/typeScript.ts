function counttVowels(string:string):number {
    let vowels = "aeiou"
    let count: number = 0;
    for(let ch of string.toLowerCase()){
        if(vowels.includes(ch))count++;
    }
    return count
}
// console.log(counttVowels("hoakewoi"));

let words = ["safwan", "diya", "arjun"];
let answer = words.map((word:string)=> {
    return word.toUpperCase();
});
console.log(answer);