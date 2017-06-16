import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#abc9bd',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)'
    },
    sectionText: {
        fontSize: 20,
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.08)'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    halfList: {
        flex: 1
    },
    row: {
        paddingVertical: 5,
        fontSize: 16
    },
    text: {
        fontSize: 16,
    }
});

export default styles;
