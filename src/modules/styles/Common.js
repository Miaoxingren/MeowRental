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
        fontSize: 18,
    },
    numInput: {
        fontSize: 18,
        color: '#252A1E',
        margin: 0,
    },
    flexByRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
    },
    flexChild: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: 'rgba(0, 0, 0, 0.15)',
    },
    flexChildL: {
        flex: 1,
    },
    switch: {
        backgroundColor: 'transparent',
        marginRight: '25%',
    },
    normal: {
        fontSize: 20
    },
    large: {
        fontSize: 25
    },
});

export default styles;
