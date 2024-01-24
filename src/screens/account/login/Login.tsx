import {
  View,
   Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {styles} from './Styles'
import { ViewModel } from './ViewModel';
import {CustomButton} from '..//../../components'


export const Login = () => {
  const {email,password,setEmail,setPassword,signIn} = ViewModel()
  
  ;
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Text style={styles.txt}>BIENVENIDO</Text>
        <View style = {styles.iconContainer}>
          <Icon 
            type='material-community'
            name='account'
            iconStyle={styles.icon}
            size={100}
            color={"#004443"}
          />
        </View>

        <View style={styles.textContent}>
          <TextInput style={styles.txtInputut}  placeholder='Correo Electronico'placeholderTextColor={"white"} onChangeText={(text)=>{setEmail(text)}}/>
        </View>

        <View style={styles.textContent}>
          <TextInput style={styles.txtInputut}  placeholder='Contraseña' placeholderTextColor={"white"} onChangeText={(text)=>{setPassword(text)} }/>
        </View>

        <CustomButton color="white" title='INICIAR SESION' onPress={()=>signIn(email,password)}/>

      </View>
    </ScrollView>
  );
};