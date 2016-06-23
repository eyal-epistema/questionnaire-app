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

        const answers = this.props.questions.map((item, i) => {
            const className = item.status === "answered" ? styles.answered : styles.unanswered;
            return (
                <TouchableHighlight
                    key={i}
                    onPress={this.props.onNavigate.bind(this, item.id)}>
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
