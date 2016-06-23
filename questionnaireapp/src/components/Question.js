import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  agree: {
      backgroundColor: '#00c',
      borderTopWidth: 10
  },
  disagree: {
      backgroundColor: '#c00',
      borderTopWidth: 10,
      borderBottomWidth: 10
  },
  question: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 120,
    paddingBottom: 120
  },
  container: {
      flex: 1
  },
  buttonText: {
      fontSize: 40
  }
});

export default class Question extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>
                    {this.props.question}
                </Text>
                <TouchableHighlight
                    style={[styles.button, styles.agree]}
                    onPress={this.props.onAnswer.bind(this, "agree")}>
                    <View>
                        <Text style={styles.buttonText}>Agree!</Text>
                    </View>
                </TouchableHighlight> 
                <TouchableHighlight
                    style={[styles.button, styles.disagree]}
                    onPress={this.props.onAnswer.bind(this, "disagree")}>
                    <View>
                        <Text style={styles.buttonText}>Disagree!</Text>
                    </View>
                </TouchableHighlight> 
            </View>
        );
    }

}