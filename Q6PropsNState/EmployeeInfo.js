import React from "react";
import { Text, TextInput, View, Button } from "react-native";

function Employee(props) {
    return (
        <View style={{marginTop:50}}>
            <Text>Full Name:</Text>
            <TextInput>{props.name}</TextInput>

            <Text>Age:</Text>
            <TextInput>{props.age}</TextInput>

            <Text>Occupation:</Text>
            <TextInput>{props.occupation}</TextInput>

            <Button title="Update" onPress={() => alert("Employee Inforamtion Updated Successfully!")} />
        </View>
    )
}

export default Employee