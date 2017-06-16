import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewBox: {
        backgroundColor: '#eee'
    },
    section: {
        paddingHorizontal: 15,
        paddingVertical: 10,
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
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#808c9e',
    },
    headerText: {
        color: '#F0F0F0',
        fontSize: 18,
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
