/*
Props:

questionnaires
[
{
    id: string,
    questionnaire: string,
    owner: string
}
]

onSelect
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

export default class QuestionnaireList extends React.Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.questionnaires)
        }
    }

    render() {
        return (
            <View style={styles.summary}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item, i) => {
                        return (
                            <TouchableHighlight
                            key={i}
                            style={[styles.button]}
                            onPress={this.props.onSelect.bind(this)}>
                                <View>
                                    <Text>{item.questionnaire} - {item.owner}</Text>
                                </View>
                            </TouchableHighlight>                             
                        );
                    }}
                    />
            </View>
        )
    }

}