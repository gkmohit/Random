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
        const profileImage = this.props.profileImage;
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
            <View style={styles.avatarAndTextStyle}>
                <Avatar
                    size="xlarge"
                    rounded
                    icon={{name: 'user'}}
                    source={{uri: this.props.profile_image}}
                    activeOpacity={0.7}   
                    style={styles.avatarStyle}
                />
                <View style={styles.descriptionAndNameStyle}>
                    <Text
                        accessibilityLabel={description}
                        style= {styles.descriptionTextStyle} 
                        >
                        "{description}"
                    </Text>
                    <Text
                        accessibilityLabel={userName}
                        style= {styles.userNameTextStyle} 
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
    },
  });

  PictureInfo.propTypes = {
    profileImage : PropTypes.string,
    description: PropTypes.string,
    userName: PropTypes.string
}
