import React from 'react';
import {View, Text} from 'react-native';

export default class Question extends Component {

    render() {
        return (
            <Text>
                {this.props.question}
            </Text>
        )
    }

}