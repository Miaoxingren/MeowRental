import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import {connect} from 'react-redux';

import ViewItem from '../components/ViewItem';
import {ItemSeparator} from '../components/Common';

import styles from '../styles/View';

class ViewByMonthScreen extends Component {
    constructor(props) {
        super(props);
    }

    renderItem({item}) {
        let {date} = this.props;
        let {title, rented, rental} = item;
        return (<ViewItem title={title} rented={rented} rental={rental} date={date}/>);
    }

    renderListHeader() {
        let {date} = this.props;
        return (
            <View>
                <Text>{date}</Text>
            </View>
        )
    }

    render() {
        let {data} = this.props;
        return (
            <View>
                <FlatList style={styles.list}
                    data={data}
                    renderListHeader={this.renderListHeader.bind(this)}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={ItemSeparator}/>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

export default connect(mapStateToProps)(ViewByMonthScreen);
