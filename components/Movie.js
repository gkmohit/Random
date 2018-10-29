import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Movie extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(){
        this.setState({ })
    }

    render() { 
        return(
            <View style={styles.container}>
                <Text
                    accessibilityLabel={"MOVIE"}
                    style = {styles.errorTextStyle}
                    >
                    {"MOVIEEEEE TIMEEEE"}
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
    errorTextStyle : {
        color: "#FFF",
        fontSize: 35,
        textAlign: "center",
    }
  });
  Movie.propTypes = {
    error : PropTypes.array,
}
