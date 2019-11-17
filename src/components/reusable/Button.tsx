import React, { FunctionComponent } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import { COLORS } from 'theme';

interface ButtonProps {
    disabled: boolean,
    children: string,
    onPress: () => void,
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <TouchableOpacity 
            disabled={props.disabled} 
            style={[styles.buttonContainer, props.disabled ? { opacity: .5 } : null]}
            onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.MAIN,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: COLORS.SECONDARY,
        textAlign: 'center'
    }
});

export default Button