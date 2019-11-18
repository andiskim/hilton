import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { 
    View,
    Text, 
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    ActivityIndicator
 } from 'react-native';
import Modal from 'react-native-modalbox';
import ReservationList from 'screens/Reservations/ReservationsList/ReservationsList';
import AddReservation from 'screens/AddReservation';
import { COLORS } from 'theme';
import { GET_RESERVATIONS } from 'api/queries';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const screen = Dimensions.get('window');

interface NavigationParams {
    text: string;
}

interface ReservationsProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

const Reservations: FunctionComponent<ReservationsProps> = (props) => {
    const hotelName = props.navigation.getParam('hotelName');
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const triggerRefresh = () => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <ReservationList 
                hotelName={hotelName}
                modalOpen={modalOpen}
            />
            <TouchableOpacity style={styles.floatingAction} onPress={() => setModalOpen(!modalOpen)}>
                    <View style={styles.plusSignContainer}>
                        <Text style={styles.plusSign}>+</Text>
                    </View>
            </TouchableOpacity>
            <Modal 
                style={styles.addReservationModal} 
                isOpen={modalOpen}
                entry={'bottom'} 
                position={'bottom'}
                backdropOpacity={0.5}
                swipeToClose={true}
            >
                <AddReservation 
                    setModalClose={() => setModalOpen(false)}
                    hotelName={hotelName}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
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
        color: 'white',
    },
    addReservationModal: {
        height: screen.height*0.85,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});

export default Reservations