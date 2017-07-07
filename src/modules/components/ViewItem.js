import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Share,
    Image,
    Alert
} from 'react-native';

import styles from '../styles/View';
import common from '../styles/Common';

import lang from '../lang';

const ViewItemHeaderO = ({title}) => (
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
        <Text style={styles.unrentedText}>{lang.unrented}</Text>
    </View>)
);

export default class ViewItem extends Component {
    constructor(props) {
        super(props);
    }

    shareRental() {
        let {title, rental, date} = this.props;
        let {
            waterL,
            waterT,
            waterUse,
            water,
            powerL,
            powerT,
            powerUse,
            power,
            house,
            manage,
            net,
        } = rental;
        let total = water +
            power +
            house +
            manage +
            net;
        let msg =
            `${title}房客你好，本月（${date}）房租明细如下：
            上月水行度：${waterL}
            本月水行度：${waterT}
            实际用水：${waterUse}
            上月电行度：${powerL}
            本月电行度：${powerT}
            实际用电：${powerUse}
            水费：${water}
            电费：${power}
            网费：${net}
            租金：${house}
            卫生/管理费：${manage}
            总计：${total}`;
        Share.share({
            message: msg
        }).then((result) => {
            if (result.action === Share.sharedAction) {
                Alert.alert(lang.shared);
            } else if (result.action === Share.dismissedAction) {
                Alert.alert(lang.unshared);
            }
        }).catch((error) => {
            Alert.alert('error: ' + error.message)
        });
    }

    renderHeader() {
        let {title} = this.props;
        let shareImg = require('../../img/share.png');
        return (
            <TouchableOpacity onPress={this.shareRental.bind(this)} activeOpacity={0.9} style={[common.info, styles.header]}>
                <View style={styles.headerText}>
                    <Text style={common.infoText}>{title}</Text>
                </View>
                <View style={styles.share}>
                    <Image style={styles.shareImg} source={shareImg} resizeMode="contain"/>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.item}>
                {/* <ViewItemHeader title={this.props.title} /> */}
                {this.renderHeader()}
                <ViewItemDetail rented={this.props.rented} rental={this.props.rental} />
            </View>
        )
    }
}
