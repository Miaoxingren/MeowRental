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
        rental.power +
        rental.house +
        rental.manage +
        rental.net;
    return (
        <View style={styles.detailBox}>
            <View style={styles.detailList}>
                <Row text={lang.waterL + lang.colon} align='right'/>
                <Row text={lang.waterT + lang.colon} align='right'/>
                <Row text={lang.waterUse + lang.colon} align='right'/>
                <Row text={lang.powerL + lang.colon} align='right'/>
                <Row text={lang.powerT + lang.colon} align='right'/>
                <Row text={lang.powerUse + lang.colon} align='right'/>
                <Row text={lang.water + lang.colon} align='right'/>
                <Row text={lang.power + lang.colon} align='right'/>
                <Row text={lang.house + lang.colon} align='right'/>
                <Row text={lang.manage + lang.colon} align='right'/>
                <Row text={lang.net + lang.colon} align='right'/>
                <Row text={lang.total + lang.colon} align='right' total={true}/>
            </View>
            <View style={styles.detailList}>
                <Row text={rental.waterL}/>
                <Row text={rental.waterT}/>
                <Row text={rental.waterUse}/>
                <Row text={rental.powerL}/>
                <Row text={rental.powerT}/>
                <Row text={rental.powerUse}/>
                <Row text={rental.water}/>
                <Row text={rental.power}/>
                <Row text={rental.house}/>
                <Row text={rental.manage}/>
                <Row text={rental.net}/>
                <Row text={total} total={true}/>
            </View>
        </View>
    );
};

const ViewItemDetail = ({rented, rental}) => (
    rented ? (<RentalDetail rental={rental} />) : (<View style={styles.unrented}>
        <Text style={styles.unrentedText}>未租出</Text>
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
