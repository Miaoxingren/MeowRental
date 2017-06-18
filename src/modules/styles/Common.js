import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    container: {
        backgroundColor: '#eee',
        padding: 10,
    },
    info: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#808c9e',
    },
    infoText: {
        color: '#F0F0F0',
        fontSize: 20,
    },
    normal: {
        fontSize: 20
    },
    large: {
        fontSize: 25
    },
});

export default styles;
