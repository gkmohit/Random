import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import { 
  StyleSheet, 
  Text,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';

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
                
                <Avatar
                    size='large'
                    rounded
                    icon={{name: 'user', size: 'large'}}
                    source={{uri: profileImage}}
                    activeOpacity={0.2}   
                    containerStyle={styles.avatarContainer}
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    avatarContainer:{  
        flex: 1.5,
        backgroundColor: "#FFF",
        height: 100,
        alignContent: 'center',
        justifyContent: 'space-around',
    },

    descriptionAndNameContainer:{
        flex: 2,
        flexDirection: 'column',
        
    },

    textStyle: {
        color : "#FFFFFF",
        fontSize : 20

    }, 
    
  });

  PictureInfo.propTypes = {
    profileImage : PropTypes.string,
    description: PropTypes.string,
    userName: PropTypes.string
}
