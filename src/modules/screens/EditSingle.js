import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    TextInput,
    Button
} from 'react-native';
import {ItemSeparator, NumInput} from '../components/Common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/EditSingle';
import common from '../styles/Common';

import lang from '../lang';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    passNum(num) {
        this.props.passChange(this.props.action, num);
    }

    render() {
        let {title, initVal, passNum} = this.props;
        return (
            <View style={common.row}>
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

    passChange(type, val) {
        this.props.actions.editSingle(type, val);
    }

    render() {
        let {single} = this.props;
        return (
            <View style={common.container}>
                <Row action="water" title={lang.unit.water} initVal={single.water} passChange={this.passChange.bind(this)}/>
                <ItemSeparator />
                <Row action="power" title={lang.unit.power} initVal={single.power} passChange={this.passChange.bind(this)}/>
                <ItemSeparator />
                <Row action="net" title={lang.unit.net} initVal={single.net} passChange={this.passChange.bind(this)}/>
                <ItemSeparator />
                <Row action="manage" title={lang.unit.manage} initVal={single.manage} passChange={this.passChange.bind(this)}/>
            </View>
        );
    }
}

function mapStateToProps({single}, ownProps) {
	return {
		single,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSingleScreen);
