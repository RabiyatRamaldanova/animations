import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
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
        kotiki: {
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
        }
})

export default styles;