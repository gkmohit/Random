import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Title from './Title';

const QUOTE_TITLE = "Quote";
const FONT_AWESOME_ICON = "terminal";
export default class Quote extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(){
        this.setState({ })
    }

    render() { 
        
        const quote = this.props.quote.quote;
        const author = this.props.quote.author;
       

               
        return (
            <View style={styles.container}>
                <Title 
                    title={QUOTE_TITLE} 
                    fontAwesomeIcon={FONT_AWESOME_ICON} 
                    style={styles.titleStyle}/>
                <Text
                    accessibilityLabel={quote}
                    style= {styles.quoteTextStyle} >
                    "{quote}"
                </Text>
                <Text
                    accessibilityLabel={author}
                    style= {styles.authorTextStyle} >
                    - {author}
                </Text>
            </View>
        )
    }

    
}

Quote.prop = {
    setShowAnimation : PropTypes.func,
    quote: PropTypes.string,
    author: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 5
    },
    quoteTextStyle : {
        flex: 1,
        color: "#FFF",
        fontSize: 35,
        textAlign: "center",
    },
    authorTextStyle : {
        flex: 1,
        color: "#FFF",
        fontSize: 25,
        textAlign: "center",
        justifyContent: "center"
    },
    titleStyle : {
        flex: 1,
    }
  });