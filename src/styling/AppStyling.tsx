import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height: 120,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    logo: {
      marginTop:20,
      width: 100,
      height: 80,
      resizeMode: 'contain',
    },
    loginLogo: {
      marginTop:20,
      marginBottom:10,
      width: 80,
      height: 60,
      resizeMode: 'contain',
    },
    menuButton: {
      padding: 10,
    },
    mainContent: {
      flex: 1,
      marginTop: 120,
    },
    searchContainer: {
      marginTop:10,
      padding: 10,
      paddingHorizontal: 10,
    },
    searchInput: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      color: 'black',
      width: '100%',
      paddingRight: 10,
      paddingLeft: 10,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 30,
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.91)',
      borderRadius: 5,
      width: '45%',
      height: '55%',
      aspectRatio: 1,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    kartaButton: {
      width: '45%',
    },
    buttonBackground: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'black',
      fontSize: 26,
      fontWeight: 'bold',
    },
    singleButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.918)',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 50,
    },
    footer: {
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });