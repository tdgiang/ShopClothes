import AsyncStorage from '@react-native-community/async-storage';


export default setAsynstorage=async(arr)=>{
    try{
        await AsyncStorage.setItem('ARRCART',JSON.stringify(arr));
    }catch(error){
        console.log(error);
    }
    

}