function counttVowels(string:string):number {
    let vowels = "aeiou"
    let count: number = 0;
    for(let ch of string.toLowerCase()){
        if(vowels.includes(ch))count++;
    }
    return count
}
console.log(counttVowels("hoakewoi"));