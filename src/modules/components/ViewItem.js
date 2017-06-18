import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import styles from '../styles/View';
import common from '../styles/Common';

import lang from '../lang';

const ViewItemHeader = ({title}) => (
    <View style={common.info}>
        <Text style={common.infoText}>{title}</Text>
    </View>
);

const Row = ({total, align = 'left', text}) => (
    <Text style={[total ? styles.totalRow : styles.row, {textAlign: align}]}>{text}</Text>
);

const RentalDetail = ({rental}) => {
    let total = rental.water +
        rental.electric +
        rental.house +
        rental.manage +
        rental.net;
    return (
        <View style={styles.detailBox}>
            <View style={styles.detailList}>
                <Row text={lang.waterL} align='right'/>
                <Row text={lang.waterT} align='right'/>
                <Row text={lang.waterUse} align='right'/>
                <Row text={lang.electricL} align='right'/>
                <Row text={lang.electricT} align='right'/>
                <Row text={lang.electricUse} align='right'/>
                <Row text={lang.water} align='right'/>
                <Row text={lang.electric} align='right'/>
                <Row text={lang.house} align='right'/>
                <Row text={lang.manage} align='right'/>
                <Row text={lang.net} align='right'/>
                <Row text={lang.total} align='right' total={true}/>
            </View>
            <View style={styles.detailList}>
                <Row text={rental.waterL}/>
                <Row text={rental.waterT}/>
                <Row text={rental.waterUse}/>
                <Row text={rental.electricL}/>
                <Row text={rental.electricT}/>
                <Row text={rental.electricUse}/>
                <Row text={rental.water}/>
                <Row text={rental.electric}/>
                <Row text={rental.house}/>
                <Row text={rental.manage}/>
                <Row text={rental.net}/>
                <Row text={total} total={true}/>
            </View>
        </View>
    );
};

const ViewItemDetail = ({rented, rental}) => (
    rented ? (<RentalDetail rental={rental} />) : (<View>
        <Text>未租出</Text>
    </View>)
);

export default class ViewItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.item}>
                <ViewItemHeader title={this.props.title} />
                <ViewItemDetail rented={this.props.rented} rental={this.props.rental} />
            </View>
        )
    }
}
