import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { 
  StyleSheet, 
  Text,
  View,
} from 'react-native';

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }
    render() { 
        const title = this.props.title;
        const fontAwesomeIcon = this.props.fontAwesomeIcon;
        const titleTextStyle = {
            color: "#FFF",
            fontSize: 45,
            textAlign: "center",
            padding: 1,
        };
        const fontAwesomeStyle = { 
            color: '#FFF' 
        };
        return (
            <View style={styles.container}>
                <Text
                    accessibilityLabel={title}
                    style= {titleTextStyle} >
                    {title}
                </Text>
                
            </View>
        )
    }
    // <FontAwesome name={fontAwesomeIcon} size={25} style={fontAwesomeStyle} />
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

Title.propTypes = {
    title : PropTypes.string,
    fontAwesomeIcon: PropTypes.string,
}
