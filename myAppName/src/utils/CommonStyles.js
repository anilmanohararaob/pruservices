import { StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CommonStyles = StyleSheet.create({
    container: {
         width: windowHeight ,height:windowHeight
    },
    textField: {
        borderRadius: 8, borderWidth: 1, borderColor: '#888',
        margin: 10, padding: 10, backgroundColor: '#fff',
        width: '100%', textAlign: 'center',
    },
    title: {
        fontSize: 12,
        margin: 5,
    },
    value: {
        fontWeight: 'bold',
        margin: 5,
    }
})