import React, {useState} from "react";
import { View, Text, Button, TextInput } from "react-native";

function DoHailstoneSequence(){
    const [number, setNumber] = useState("");
    const [sequence, setSequence] = useState([]);
    
    const generateHailstone = () => {
        const n = parseInt(number);
        if (n <= 0 || isNaN(n)) {
            alert("Please enter a positive number");
            return;
        }

        let temp = n;
        let result = [temp];

        while (temp !== 1) {
            if (temp % 2 === 0) {
                temp = temp / 2;
            } else {
                temp = 3 * temp + 1;
            }
            result.push(temp);
        }

        setSequence(result);
    }

    return (
        <View>
            <TextInput
                placeholder="Enter a number"
                value={number}
                onChangeText={(text) => setNumber(text)}
            />
            <Button title="Generate Hailstone Sequence" onPress={generateHailstone} />
            {sequence.length > 0 && sequence.map((num, index) => (
                <Text key={index} style={{margin: 5}}>{num}</Text>
            ))}
        </View>
    )
}

export default DoHailstoneSequence