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
  list: {
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
            <View style={styles.list}>
                <ListView
                    renderSeparator={this._renderSeperator}
                    dataSource={this.state.dataSource}
                    renderRow={(item, i) => {
                        return (
                            <TouchableHighlight
                            key={i}
                            onPress={this.props.onSelect.bind(this, item.id)}>
                                <View>
                                    <Text>{item.title} - {item.owner}</Text>
                                </View>
                            </TouchableHighlight>                             
                        );
                    }}
                    />
            </View>
        )
    }

    _renderSeperator (sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
                }}
            />
        );
    }

}