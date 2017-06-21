import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee'
    },
    pickerView: {
        backgroundColor: '#79B0BA',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
    },
    picker: {
        backgroundColor: '#79B0BA',
        color: '#252A1E',
    },
    section: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#79B0BA',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
    },
    sectionText: {
        color: '#252A1E',
        fontSize: 20,
    },
    sectionSeparator: {
        height: 10,
    },
    item: {
        marginHorizontal: 20,
    },
    detailBox: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        backgroundColor: '#fff',
    },
    detailList: {
        flex: 1
    },
    row: {
        paddingVertical: 5,
        fontSize: 16
    },
    totalRow: {
        paddingVertical: 5,
        fontSize: 20,
        backgroundColor: '#808c9e',
        color: '#F0F0F0',
    }
});

export default styles;
