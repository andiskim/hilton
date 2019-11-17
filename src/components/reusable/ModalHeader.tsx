import React, { FunctionComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

interface ModalHeaderProps {
    onPress: () => void
}

const ModalHeader: FunctionComponent<ModalHeaderProps> = (props) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalHeaderLeft} />
            <View style={styles.modalHeaderCenter}>
                <Text style={styles.addReservationTitle}>Add Reservation</Text>
            </View>
            <TouchableOpacity style={styles.modalHeaderRight} onPress={props.onPress}>
                <Text style={{fontSize: 20}}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flexDirection: 'row', 
        marginTop: 10
    },
    modalHeaderLeft: {
        flex: 1
    },
    modalHeaderCenter: {
        flex: 8
    },
    modalHeaderRight: {
        flex: 1
    },
    addReservationTitle: {
        fontWeight: 'bold',
        textAlign: 'center', 
        fontSize: 18
    }
})

export default ModalHeader;