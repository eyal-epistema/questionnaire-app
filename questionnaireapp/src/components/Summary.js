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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    fontSize: 20
  },
  question: {
    fontSize: 16
  },
  answer: {
    fontSize: 20
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
                <Text style={styles.header}>Summary</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => {
                        return (
                            <View>
                                <Text style={styles.question}>{item.question} </Text>
                                 <Text style={styles.answer}>{item.answer}</Text>
                            </View>
                        );
                    }}
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