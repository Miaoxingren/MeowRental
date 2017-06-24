import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    Button
} from 'react-native';

import { connect } from 'react-redux';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';
import common from '../styles/Common';

import lang from '../lang';

const renderItem = ({item}) => (
    <ViewItem title={item.title} rented={item.rented} rental={item.rental}/>
);

const renderHeader = () => (1);

const keyExtractor = (item, index) => item.title;

class PreviewScreen extends Component {
    constructor(props) {
        super(props);
    }

    submit() {
        this.props.navigator.pop({
          animated: true,
          animationType: 'fade',
        });
    }

    render() {
        let {preview} = this.props;
        return (
            <View style={styles.container}>
                <FlatList data={preview}
                    keyExtractor={keyExtractor}
                    renderListHeader={renderHeader}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}/>
                <View style={common.row}>
                    <Button onPress={this.submit.bind(this)} title={lang.submit} color="#79B0BA" />
                </View>
            </View>
        );
    }
}

function mapStateToProps({preview}, ownProps) {
	return {
        preview
	};
}

export default connect(mapStateToProps)(PreviewScreen);
