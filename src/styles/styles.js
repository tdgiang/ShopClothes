import { StyleSheet } from 'react-native';
const bgColor='#00cc99';

const styles=StyleSheet.create({
    contianerDrawer:{
        flex:1,
        backgroundColor:bgColor
    },
    headerDrawer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    itemDrawer:{
        backgroundColor:'white',
        marginTop:10,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:10
    },

    //img
    imgAvatar:{
        width:180,
        height:180,
        borderRadius:90,
        borderColor:'white',
        borderWidth:1
    },

//Txt
    txtBigWhite:{
        color:'white',
        fontSize:22,
        marginTop:10,
    }

})

export default styles;