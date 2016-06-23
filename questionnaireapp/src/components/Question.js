import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  question: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
  }
});

export default class Question extends React.Component {

    render() {
        return (
            <View>
                <Text style={styles.question}>
                    {this.props.question}
                </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.props.onAnswer.bind(this, "agree")}>
                    <View>
                        <Text style={styles.buttonText}>Agree!</Text>
                    </View>
                </TouchableHighlight> 
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.props.onAnswer.bind(this, "disagree")}>
                    <View>
                        <Text style={styles.buttonText}>Disagree!</Text>
                    </View>
                </TouchableHighlight> 
            </View>
        );
    }

}