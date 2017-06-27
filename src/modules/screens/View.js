import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Picker
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/View';
import common from '../styles/Common';

import lang from '../lang';

class ViewScreen extends Component {
    constructor(props) {
        super(props);

        let {history} = this.props;
        let latest = history && history.length ? history[history.length - 1] : {date: '', data: []};
        this.state = {date: latest.date, data: latest.data};
    }

    showByMonth() {
        this.props.navigator.push({
            screen: 'meowrental.ViewByMonth',
            title: this.state.date,
            passProps: {
                data: this.state.data,
                date: this.state.date,
            },
            navigatorStyle: {
                tabBarHidden: true,
                navBarHidden: false,
            }
        });
    }

    saveByMonth() {
        let {data, date} = this.state;
        this.props.actions.saveByMonth(data, date);
    }

    saveByMonth() {
        this.props.actions.saveByFlat();
    }

    changeDate(date, position) {
        this.setState({date, data: this.props.history[position].data || []});
    }

    render() {
        let {history} = this.props;
        return (
            <View style={common.container}>
                <View style={styles.pickerView}>
                    <Picker style={styles.picker} mode="dropdown" onValueChange={this.changeDate.bind(this)} selectedValue={this.state.date}>
                        {history.map((item) => (<Picker.Item key={item.date} label={item.date} value={item.date} />))}
                    </Picker>
                </View>

                <TouchableOpacity onPress={this.showByMonth.bind(this)} activeOpacity={0.9}>
                    <View style={[common.info, styles.viewOption]}><Text style={common.infoText}>{lang.viewByMonth}</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.saveByMonth.bind(this)} activeOpacity={0.9}>
                    <View style={[common.info, styles.viewOption]}><Text style={common.infoText}>{lang.saveByMonth}</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.saveByFlat.bind(this)} activeOpacity={0.9}>
                    <View style={[common.info, styles.viewOption]}><Text style={common.infoText}>{lang.saveByFlat}</Text></View>
                </TouchableOpacity>

            </View>
        );
    }
}

function mapStateToProps({history}, ownProps) {
	return {
        history
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);
