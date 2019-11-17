import React, { FunctionComponent } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker';

interface DatePickerCustomProps {
    date: string,
    minDate: string,
    maxDate: string,
    format: string,
    onDateChange: () => void
}

const DatePickerCustom: FunctionComponent<DatePickerCustomProps> = (props) => {
    return (
        <View>
            <Text style={styles.field}>
                Departure Date
            </Text>
            <DatePicker
                style={styles.datePicker}
                date={props.date}
                mode="date"
                placeholder="Select a Date"
                format={props.format}
                minDate={props.minDate}
                maxDate={props.maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={() => console.log("onDateChange")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    datePicker: {
        width: 200
    }
})

export default DatePickerCustom