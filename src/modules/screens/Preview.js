import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as editActions from '../../reducers/edit.action';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';
import common from '../styles/Common';

import lang from '../lang';

const renderItem = ({item}) => (
    <ViewItem title={item.title} rented={item.rented} rental={item.rental}/>
);

const keyExtractor = (item, index) => item.title;

class PreviewScreen extends Component {
    constructor(props) {
        super(props);
    }

    submit() {
        let {navigator, actions, preview} = this.props;
        actions.generateLatest(preview);
        navigator.pop({
          animated: true,
          animationType: 'fade',
        });
    }

    render() {
        let {preview, actions} = this.props;
        let saveImg = require('../../img/save.png');
        return (
            <View style={styles.preview}>
                <FlatList data={preview}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}/>
                <TouchableOpacity onPress={this.submit.bind(this)} activeOpacity={0.6} style={styles.save}>
                    <Image style={styles.saveImg} source={saveImg} resizeMode="contain"/>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps({preview}, ownProps) {
	return {
        preview
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(editActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen);
