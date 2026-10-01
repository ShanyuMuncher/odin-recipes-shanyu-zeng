function process(s, b) {
    let final = s + b;
    if (final === 100) { // === is casting the variable to reassaign the value of the variable to the first type
        return "Perfect score achieved! student scored: " + final;
    }
    return "student scored: " + final;
}

console.log(process(80, 20));