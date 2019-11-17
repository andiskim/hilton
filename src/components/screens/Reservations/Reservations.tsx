import React, { FunctionComponent, useState } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions
 } from 'react-native';
import Modal from 'react-native-modalbox';
import Reservation from 'screens/Reservations/Reservation';
import AddReservation from 'screens/Reservations/AddReservation';
import { COLORS } from 'theme';

const screen = Dimensions.get('window');

interface ReservationsProps {

}

const Reservations: FunctionComponent<ReservationsProps> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <ScrollView>
                <Reservation />
                <Reservation />
            </ScrollView>
            <TouchableOpacity style={styles.floatingAction} onPress={() => setModalOpen(!modalOpen)}>
                    <View style={styles.plusSignContainer}>
                        <Text style={styles.plusSign}>+</Text>
                    </View>
            </TouchableOpacity>
            <Modal 
                style={styles.modal} 
                isOpen={modalOpen}
                entry={'bottom'} 
                position={'bottom'}
                backdropOpacity={0.5}
                swipeToClose={true}
            >
                <AddReservation setModalClose={() => setModalOpen(false)}/>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    floatingAction: {
        width: 50,
        height: 50,
        borderRadius: 25, 
        backgroundColor: COLORS.MAIN,
        position: 'absolute',
        bottom: 40,
        right: 20,
    },
    plusSignContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    plusSign: {
        fontSize: 25,
        color: 'white'
    },
    modal: {
        height: screen.height*0.85,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});

export default Reservations