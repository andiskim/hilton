import React, { FunctionComponent } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

interface TextInputCustomProps {
    field: string,
    value: string,
    editable: boolean,
    onChangeText: () => void
}

const TextInputCustom: FunctionComponent<TextInputCustomProps> = (props) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.field}>
                {props.field}
            </Text>
            <TextInput 
                style={[styles.fieldBox, props.editable ? null : { color: 'grey' }]} 
                value={props.value}
                onChangeText={props.onChangeText}
                editable={props.editable}
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