import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  Image
} from 'react-native';

export default class PictureInfo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() { 
        const userName = this.props.userName;
        const description = this.props.description;
        const profileImage = this.props.profileImage;;

        return (
            <View style={styles.container}>
                <Image 
                    source={{uri: profileImage}}
                    style={styles.imageContainer}
                />
                <View style={styles.descriptionAndNameContainer}>
                    <Text
                        accessibilityLabel={description}
                        style= {styles.textStyle} 
                        >
                        {description}
                    </Text>
                    <Text
                        accessibilityLabel={userName}
                        style= {styles.textStyle} 
                        >
                        - {userName}
                    </Text>
                </View>
            </View>
        )
    }
    // <FontAwesome name={fontAwesomeIcon} size={25} style={fontAwesomeStyle} />
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    imageContainer:{
        flex: 1.5,  
        width: 100, 
        height: 100,
        backgroundColor: "#FFF",
        alignContent: 'center',
        justifyContent: 'space-around',
    },

    descriptionAndNameContainer:{
        flex: 2,
        flexDirection: 'column',
        
    },

    textStyle: {
        color : "#FFFFFF",
        fontSize : 20,
        textAlign: "center"

    }, 
    
  });

  PictureInfo.propTypes = {
    profileImage : PropTypes.string,
    description: PropTypes.string,
    userName: PropTypes.string
}
