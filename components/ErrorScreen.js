import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class ErrorScreen extends React.Component {

    constructor(props) {
        super(props);
    }
    render() { 
        const error = this.props.error;
        console.log("Bro: " + error);
        const errorTextStyle = {
            color: "#FFF",
            fontSize: 35,
            textAlign: "center",
        };
        return (
            <View style={styles.container}>
                <Text
                    accessibilityLabel={error}
                    style= {errorTextStyle} >
                    {"Helllo"}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  ErrorScreen.propTypes = {
    error : PropTypes.array,
}
