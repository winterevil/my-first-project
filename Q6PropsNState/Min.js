import React, {useState} from "react";
import { View, Text, Button, TextInput } from "react-native";

function FindMinimum(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [min, setMin] = useState(null);

    const MinOfThree = () => {
        if (num1.length === 0 || num2.length === 0 || num3.length === 0) {
            alert("Please enter all numbers");
            return;
        }
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);
        const min = Math.min(n1, n2, n3);
        setMin(min);
    }

    return (
        <View>
            <TextInput
                placeholder="Enter number 1"
                value={num1}
                onChangeText={(text) => setNum1(text)}
            />
            <TextInput
                placeholder="Enter number 2"
                value={num2}
                onChangeText={(text) => setNum2(text)}
            />
            <TextInput
                placeholder="Enter number 3"
                value={num3}
                onChangeText={(text) => setNum3(text)}
            />
            <Button title="Find Minimum" onPress={MinOfThree} />
            {min !== null && <Text>Minimum: {min}</Text>}
        </View>
    )
}

export default FindMinimum