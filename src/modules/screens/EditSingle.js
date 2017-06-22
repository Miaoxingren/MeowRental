import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Alert
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
        this.state = { num: this.props.default };
    }

    render() {
        return (
            <View style={styles.row}>
                <View style={common.info}><Text style={common.infoText}>{this.props.title}</Text></View>
                <View style={styles.value}>
                    <NumInput
                        passNum={(num) => this.setState({num})}
                        default={this.state.text}/>
                </View>
            </View>
        );
    }
}

class EditSingleScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {single} = this.props;
        return (
            <View style={common.container}>
                <Row title={lang.unit.water} default={single.water}/>
                <ItemSeparator />
                <Row title={lang.unit.power} default={single.power}/>
                <ItemSeparator />
                <Row title={lang.unit.net} default={single.net}/>
                <ItemSeparator />
                <Row title={lang.unit.manage} default={single.manage}/>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    Alert.alert(format(state));
    let editState = state;
	return {
		single: editState.single,
	};
}

const format = (obj) => {
    let str = '';
    for (key of Object.keys(obj)) {
        str += key + ' ';
    }
    return str;
}


function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSingleScreen);
