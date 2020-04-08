import AsyncStorage from '@react-native-community/async-storage';


export default setAsynstorage=async(arr)=>{
    try{
       
        await AsyncStorage.setItem('ARRCART03',JSON.stringify(arr));
       
        
    }catch(error){
        console.log(error);
    }
    

}