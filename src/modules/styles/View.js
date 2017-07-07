import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
    },
    list: {
        marginVertical: 20,
    },
    pickerView: {
        backgroundColor: '#79B0BA',
        margin: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
    },
    picker: {
        backgroundColor: '#79B0BA',
        color: '#252A1E',
    },
    viewOption: {
        margin: 10,
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
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        alignItems: 'flex-start',
    },
    share: {
        flex: 1,
        alignItems: 'flex-end',
    },
    unrented: {
        backgroundColor: '#808c9e',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    unrentedText: {
        color: '#F0F0F0',
        fontSize: 18
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
    },
    preview: {
        backgroundColor: '#eee',
        position: 'relative',
        paddingVertical: 15
    },
    save: {
        width: 64,
        height: 64,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 64,
        right: 10
    },
    saveImg: {
        width: 64,
        height: 64,
    },
    shareImg: {
        width: 32,
        height: 32,
    }
});

export default styles;
