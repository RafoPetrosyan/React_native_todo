import React from "react";
import {View, StyleSheet, Text} from "react-native";

const Todo = ({todo}) => {

    return (
        <View style={styles.todo}>
           <Text>{todo.title}</Text>
        </View>
    )
}
export default Todo;

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
})
