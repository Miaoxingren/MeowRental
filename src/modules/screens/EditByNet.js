import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TextInput,
    Alert
} from 'react-native';
import NetItem from '../components/NetItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as editActions from '../../reducers/edit.action';
import styles from '../styles/EditByNet'

const keyExtractor = (item, index) => item.key;

class EditByNetScreen extends Component {
    constructor(props) {
        super(props);
    }

    passChange(flat, type, val) {
        this.props.actions.editRental(flat, type, val);
    }

    renderItem({item}) {
        let {title, rental} = item;
        let {net} = rental;
        return (
            <NetItem title={title} net={net} passChange={this.passChange.bind(this)}/>
        );
    }

    render() {
        let {flats} = this.props;
        return (
            <View>
                <FlatList data={flats}
                    keyExtractor={keyExtractor}
                    renderItem={this.renderItem.bind(this)}/>
            </View>
        )
    }
}

function mapStateToProps({preview}, ownProps) {
	return {
		flats: preview
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditByNetScreen);
