import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (sum, ints) => {
        /* Implement me! */
        if(sum < 1){ return "nulla";}
        if(sum > 1000){ return "reached limit";}
        if(sum >= 1000){ return "M" + addAndConvertToRomanNumerals(sum - 1000);}
        if(sum >= 900){ return "CM" + addAndConvertToRomanNumerals(sum - 900);}
        if(sum >= 500){ return "D" + addAndConvertToRomanNumerals(sum - 500);}
        if(sum >= 400){ return "CD" + addAndConvertToRomanNumerals(sum - 400);}
        if(sum >= 100){ return "C" + addAndConvertToRomanNumerals(sum - 100);}
        if(sum >= 90){ return "XC" + addAndConvertToRomanNumerals(sum - 90);}
        if(sum >= 50){ return "L" + addAndConvertToRomanNumerals(sum - 50);}
        if(sum >= 40){ return "XL" + addAndConvertToRomanNumerals(sum - 40);}
        if(sum >= 10){ return "X" + addAndConvertToRomanNumerals(sum - 10);}
        if(sum >= 9){ return "IX" + addAndConvertToRomanNumerals(sum - 9);}
        if(sum >= 5){ return "V" + addAndConvertToRomanNumerals(sum - 5);}
        if(sum >= 4){ return "IV" + addAndConvertToRomanNumerals(sum - 4);}
        if(sum >= 1){ return "I" + addAndConvertToRomanNumerals(sum - 1);} 
        return ints;
    }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })
        const sum = numbers.reduce((partialSum, a) => partialSum + a,0);
        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(sum)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}