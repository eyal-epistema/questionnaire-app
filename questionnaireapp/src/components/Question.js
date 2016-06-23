import React from 'react';
import {View, Text, TouchableElement} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Question extends Component {

    render() {
        return (
            <View>
                <Text>
                    {this.props.question}
                </Text>
                <TouchableElement
                    style={styles.button}
                    onPress={this.props.onAnswer.bind(this, "agree")}>
                    <View>
                        <Text style={styles.buttonText}>Agree!</Text>
                    </View>
                </TouchableElement> 
                <TouchableElement
                    style={styles.button}
                    onPress={this.props.onAnswer.bind(this, "disagree")}>
                    <View>
                        <Text style={styles.buttonText}>Disagree!</Text>
                    </View>
                </TouchableElement> 
            </View>
        );
    }

}