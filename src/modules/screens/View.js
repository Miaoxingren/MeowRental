import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    Picker
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import styles from '../styles/View';

class ViewScreen extends Component {
    constructor(props) {
        super(props);

        let {history} = this.props;
        let latest = history && history.length ? history[history.length - 1] : {date: '', data: []};
        this.state = {date: latest.date, rentals: latest.data};
    }

    navTo(navKey) {
        let nav = EditScren.navs[navKey];
        if (!nav) return;
        this.props.navigator.push({
            screen: nav.screen,
            title: nav.title,
            passProps: {
                data: this.state.rentals,
                date: this.state.date,
            },
            navigatorStyle: {
                tabBarHidden: true,
                navBarHidden: false,
            }
        });
    }

    changeDate(date, position) {
        this.setState({date, rentals: this.props.history[position].data || []});
    }

    render() {
        let {history} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.pickerView}>
                    <Picker style={styles.picker} mode="dropdown" onValueChange={this.changeDate.bind(this)} selectedValue={this.state.date}>
                        {history.map((item) => (<Picker.Item key={item.date} label={item.date} value={item.date} />))}
                    </Picker>
                </View>
                
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
