import {signInWithEmailAndPassword } from 'firebase/auth'
import {useState,useEffect} from 'react'
import{auth} from '../../../utils/Firebase'
import { useNavigation } from '@react-navigation/native';
import {screen} from '../../../utils/ScreenName'
export const ViewModel = () => {
 const [email , setEmail] = useState('');
 const [password,setPassword] =useState('');


 const navigation= useNavigation()
 const  signIn = async(email:string,password:string) =>{
                try {
                    await signInWithEmailAndPassword(auth,email,password);
                    // @ts-ignore
                      navigation.navigate(screen.FacturacionStack.tab ,{
                      screen: screen.FacturacionStack.facturacion 
                })
                  // @ts-ignore
                } catch (error) {
                   console.log(error);
                  
                }
 }

  return{
    email,
    setEmail,
    password,
    setPassword,
    signIn

  }
}
