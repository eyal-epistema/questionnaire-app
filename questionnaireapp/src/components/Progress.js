/*
    props.questions:
    
    [
        {
            id: string,
            status: "answered" | "unanswered"
        },
        ...
    ]
*/

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  progress: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  box: {
      width: 20,
      height: 20,
      marginRight: 5
  },
  answered: {
    backgroundColor: '#f00'
  },
  unanswered: {
    backgroundColor: '#00f'
  }
});

export default class Progress extends React.Component {


    render() {

        let questions = Object.keys(this.props.questions);
        const answers = questions.map((key, i) => {
            const className = questions[key].status === "answered" ? styles.answered : styles.unanswered;
            return (
                <TouchableHighlight
                    key={i}
                    onPress={this.props.onNavigate.bind(this, key)}>
                    <View style={[styles.box, className]}></View>
                </TouchableHighlight>
            )
        })

        return (
            <View style={styles.progress}> 
                {answers}
            </View>
        );
    }

}
