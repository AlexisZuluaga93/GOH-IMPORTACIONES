import {signInWithEmailAndPassword} from 'firebase/auth'
import {useState,useEffect} from 'react'
import{auth} from '../../../utils/Firebase'
export const ViewModel = () => {
 const [email , setEmail] = useState('');
 const [password,setPassword] =useState('');

 const signIn =(email:string,password:string) =>{
        setEmail(email)
        setPassword(password)
        try {
          signInWithEmailAndPassword(auth,email,password);
          
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
