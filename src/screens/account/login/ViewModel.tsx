import {signInWithEmailAndPassword } from 'firebase/auth'
import {useState,useEffect} from 'react'
import{auth} from '../../../utils/Firebase'
import { useNavigation } from '@react-navigation/native';
import {screen} from '../../../utils/ScreenName'
import Toast from 'react-native-toast-message';
export const ViewModel = () => {


 const [showPassword,setShowPassword]= useState(false);
 const navigation= useNavigation()
 const  signIn = async(email:string,password:string, formValue:any) =>{
                try {
                    await signInWithEmailAndPassword(auth,email,password);
                    console.log(formValue.rol);
                    
                    if(formValue.rol!=""){
                      // @ts-ignore
                      navigation.navigate(screen.FacturacionStack.tab ,{
                        screen: screen.FacturacionStack.facturacion,
                       // params:{email,password}
                  })
                    } else{
                      // @ts-ignore
                           navigation.navigate(screen.AccountStack.tab ,{
                           screen: screen.AccountStack.usuario,
                           params:{email,password}
                    }
                    )}
                  // @ts-ignore
                } catch (error) {
                  Toast.show({
                    type:"error",
                    position:'bottom',
                    text1:"Usuario o contraseña invalida"
                  })
                   
                  
                }
 }
  return{
    signIn,
    showPassword,
    setShowPassword,

  }
}
