import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    editBox: {
        backgroundColor: '#eee',
        padding: 10,
    },
    editItem: {
        margin: 10,
        padding: 10,
        backgroundColor: '#808c9e',
    },
    editText: {
        color: '#F0F0F0',
        fontSize: 18,
    },
    sectionSeparator: {
        height: 10,
    },
    item: {
        marginHorizontal: 15,
    },
    separatorBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    separator: {
        width: 5,
        height: 15,
        backgroundColor: '#693028'
    },


    detail: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        backgroundColor: '#fff',
    },
    halfList: {
        flex: 1
    },
    row: {
        paddingVertical: 5,
        fontSize: 16
    },
    totalRow: {
        paddingVertical: 5,
        fontSize: 18,
        backgroundColor: '#808c9e',
        color: '#F0F0F0',
    },
    text: {
        fontSize: 16,
    }
});

export default styles;