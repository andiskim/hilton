import React, { FunctionComponent, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

interface TextInputCustomProps {
    field: string,
    value: string,
    onChangeText: () => void
}

const TextInputCustom: FunctionComponent<TextInputCustomProps> = (props) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.field}>
                {props.field}
            </Text>
            <TextInput 
                style={styles.fieldBox} 
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        width: 250
    },
    field: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    fieldBox: {
        borderWidth: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10
    }

});

export default TextInputCustom