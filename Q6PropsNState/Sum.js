import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

function SumFirstLastDigit() {
    const [number, setNumber] = useState("");
    const [sum, setSum] = useState(null);

    const calculateSum = () => {
        if (number.length === 0) {
            alert("Please enter a number");
            return;
        }
        const firstDigit = parseInt(number[0]);
        const lastDigit = parseInt(number[number.length - 1]);
        const sum = firstDigit + lastDigit;
        setSum(sum);
    }

    return (
        <View>
            <TextInput
                placeholder="Enter a number"
                value={number}
                onChangeText={(text) => setNumber(text)}
            />
            <Button title="Calculate Sum" onPress={calculateSum} />
            {sum !== null && <Text>Sum: {sum}</Text>}
        </View>
    )
}

export default SumFirstLastDigit