import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scroll: {
        flex: 10,
        backgroundColor: '#7C71D8',
    },
    menuContainers: { 
        backgroundColor: '#f08080', 
        elevation: 5,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20, 
        marginTop: 10
    },
    menuContainersText: {
        fontSize: 25, 
        color: 'black'
    },
    imageHamburger: {
        width: 30, 
        height: 30, 
        marginLeft: 10
    },
    barView: {
        flex:1, 
        backgroundColor: 'white',
    },
    bar: {
        flex: 0.08 , 
        marginTop: 13, 
        flexDirection: 'row',
        
    },
    newsBarText: {
        fontStyle: 'italic', 
        fontSize: 20, 
        marginLeft: 30, 
        fontWeight: '700'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
        
      },
      backgroundOfSecondScreen: {
          flex: 1,
          width: '100%', 
          height: '100%', 
          flexDirection: 'column', 
          alignItems: 'center'
      },
      pleaseWaitImage: {
          height: 250, 
          width: 250, 
          marginTop: 100
      },
      cats: {
          flexDirection: 'row'
      },
      dimensionsOfCats: {
          height: 50, 
          width: 50,
          marginLeft: 1
      },
      animatedBackgroudOfFirstScreen: {
          width: '100%', 
          height: '100%'
      },
      animatedViewOfFirstScreen: {
          flex: 1
      },
      viewForButtonOfFirstScreen: {
          flex: 1, 
          marginBottom: 100,
          alignSelf: 'center', 
          justifyContent: 'flex-end'
      },
      animatedButton: {
          height: 100, 
          width: 150
      },
      webview: {
          flex: 1
      },
      webviewOnLoading: {
          flex: 0,
          width: 0,
          height: 0
      },
      loading: {
        flex: 0,
        position: 'absolute', 
        marginTop: 0
      }
})
export default styles;