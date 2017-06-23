import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import {ItemSeparator, NumInput} from '../components/Common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditSingle';
import common from '../styles/Common';

import {single} from '../data';

import lang from '../lang';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    passNum(num) {
        this.props.edit(this.props.action, num);
    }

    render() {
        let {title, initVal, passNum} = this.props;
        return (
            <View style={styles.row}>
                <View style={common.info}><Text style={common.infoText}>{title}</Text></View>
                <View style={styles.value}>
                    <NumInput
                        passNum={this.passNum.bind(this)}
                        initVal={initVal}/>
                </View>
            </View>
        );
    }
}

class EditSingleScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {...this.props.single};
    }

    submitSingle() {
        let {single, actions} = this.props;
        for (key of Object.keys(single)) {
            if (this.state[key] !== single[key]) {
                actions.editSingle(key, this.state[key]);
            }
        }
        this.props.navigator.pop({
          animated: true,
          animationType: 'fade',
        });
    }

    editSingle(key, val) {
        switch (key) {
            case 'water':
                this.setState({water: val});
                break;
            case 'power':
                this.setState({power: val});
                break;
            case 'net':
                this.setState({net: val});
                break;
            case 'manage':
                this.setState({manage: val});
                break;
            default:
                return;
        }
    }

    render() {
        let {single} = this.props;
        return (
            <View style={common.container}>
                <Row action="water" title={lang.unit.water} initVal={single.water} edit={this.editSingle.bind(this)}/>
                <ItemSeparator />
                <Row action="power" title={lang.unit.power} initVal={single.power} edit={this.editSingle.bind(this)}/>
                <ItemSeparator />
                <Row action="net" title={lang.unit.net} initVal={single.net} edit={this.editSingle.bind(this)}/>
                <ItemSeparator />
                <Row action="manage" title={lang.unit.manage} initVal={single.manage} edit={this.editSingle.bind(this)}/>
                <View style={styles.row}>
                    <Button onPress={this.submitSingle.bind(this)} title={lang.submit} color="#79B0BA" />
                </View>
            </View>
        );
    }
}

const format = (obj) => {
    let str = '';
    for (key of Object.keys(obj)) {
        str += key + ' ';
    }
    return str;
}

function mapStateToProps(state, ownProps) {
	return {
		single: state.single,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSingleScreen);
