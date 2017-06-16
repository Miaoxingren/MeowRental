import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Button,
    SectionList
} from 'react-native';
import styles from '../styles/View';
import lang from '../lang';

class ViewItemHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
        );
    }
}

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={[styles.row, {textAlign: this.props.align || 'left'}]}>{this.props.text}</Text>
        );
    }
}

class TotalRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={[styles.totalRow, {textAlign: this.props.align || 'left'}]}>{this.props.text}</Text>
        );
    }
}


class RentalDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let total = this.props.rental.water +
            this.props.rental.electric +
            this.props.rental.house +
            this.props.rental.manage +
            this.props.rental.net;
        return (
            <View style={styles.detail}>
                <View style={{flex: 1}}>
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
                    <TotalRow text={lang.total} align='right'/>
                </View>
                <View style={{flex: 1}}>
                    <Row text={this.props.rental.waterL}/>
                    <Row text={this.props.rental.waterT}/>
                    <Row text={this.props.rental.waterUse}/>
                    <Row text={this.props.rental.electricL}/>
                    <Row text={this.props.rental.electricT}/>
                    <Row text={this.props.rental.electricUse}/>
                    <Row text={this.props.rental.water}/>
                    <Row text={this.props.rental.electric}/>
                    <Row text={this.props.rental.house}/>
                    <Row text={this.props.rental.manage}/>
                    <Row text={this.props.rental.net}/>
                    <TotalRow text={total} align='left'/>
                </View>
            </View>
        );
    }
}

class ViewItemDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            this.props.empty ? (<View>
                <Text>未租出</Text>
            </View>) : (<RentalDetail rental={this.props.rental} />)
        );
    }
}

export default class ViewItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.item}>
                <ViewItemHeader title={this.props.title} />
                <ViewItemDetail empty={this.props.empty} rental={this.props.rental} />
            </View>
        )
    }
}
