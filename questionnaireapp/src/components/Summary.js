/*
[
{
    id: string,
    question: string,
    answer: string
}
]
*/

import React from 'react';
import {View, Text, StyleSheet, ListView, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  summary: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Summary extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.answers)
        }
    }

    render() {
        return (
            <View style={styles.summary}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => <Text>{item.question} - {item.answer}</Text>}
                    />
                <TouchableHighlight
                    style={[styles.button]}
                    onPress={this.props.onSubmit.bind(this)}>
                    <View>
                        <Text>Submit!</Text>
                    </View>
                </TouchableHighlight> 
            </View>
        )
    }

}