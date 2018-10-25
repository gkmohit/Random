import React from 'react';
import Title from './Title';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

const JOKE_TITLE = "Joke";
const FONT_AWESOME_ICON = "glass";
export default class Joke extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() { 
        
        const joke = this.props.joke.joke;
        return (
            <View style={styles.container}>
                <Title 
                    title={JOKE_TITLE} 
                    fontAwesomeIcon={FONT_AWESOME_ICON} 
                    style={styles.jokeTitleStyle}
                    />
                <Text
                    accessibilityLabel={joke}
                    style= {styles.jokeTextStyle} >
                    {joke}
                </Text>
            </View>
        )
    }


    
}

Joke.prop = {
    showAnimation : PropTypes.func,
    joke: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'space-around',
      padding: 5
    },
    jokeTextStyle : {
        flex: 2,
        color: "#FFF",
        fontSize: 35,
        textAlign: "center",
    },
    jokeTitleStyle: {
        flex: 1,
    }
  });