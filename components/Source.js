import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
} from 'react-native';

export default class Source extends React.Component {

    constructor(props) {
        super(props);
    }
    render() { 
        const source = this.props.source;
        const sourceTextStyle = {
            color: "#FFF",
            fontSize: 15,
            textAlign: "center",
            padding: 1,
        };
        return (
            <View style={styles.container}>
                <Text
                    accessibilityLabel={source}
                    style= {sourceTextStyle} >
                    {source}
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

  Source.propTypes = {
    source : PropTypes.string
}
