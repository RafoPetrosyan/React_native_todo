import React from "react";
import {View, StyleSheet, TextInput, Button} from "react-native";

const AddTodo = ({onSubmit}) => {

    const pressHandler = () => {
        onSubmit('test todo');
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Add todo' style={styles.input} onPress={pressHandler}/>
        </View>
    )
}
export default AddTodo;

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10,
    },
    button: {},
})
