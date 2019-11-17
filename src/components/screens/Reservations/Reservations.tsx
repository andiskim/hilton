import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { 
    View,
    Text, 
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
    ActivityIndicator
 } from 'react-native';
import Modal from 'react-native-modalbox';
import ReservationList from 'screens/Reservations/ReservationsList/ReservationsList';
import AddReservation from 'screens/AddReservation/AddReservation';
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
    const { loading, data, error } = useQuery(GET_RESERVATIONS, {variables: {hotelName}});
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <ScrollView>
                {loading ? <ActivityIndicator style={styles.indicator} /> : 
                    error ? <Text style={styles.loadError}>Error loading data.</Text> :
                        data.reservations.length === 0 ? <Text style={styles.loadError}>No reservations found for {hotelName}.</Text> :
                            <ReservationList reservations={data.reservations} />
                }
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
                <AddReservation 
                    setModalClose={() => setModalOpen(false)}
                    hotelName={hotelName}
                />
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
        color: 'white',
    },
    indicator: {
        marginTop: 40
    },
    loadError: {
        textAlign: 'center',
        margin: 40,
    },
    modal: {
        height: screen.height*0.85,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});

export default Reservations