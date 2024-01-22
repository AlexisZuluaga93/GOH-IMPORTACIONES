import {
  View,
   Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon,Button } from 'react-native-elements';
import {styles} from './Styles'
import { ViewModel } from './ViewModel';
import { initialWindowMetrics } from 'react-native-safe-area-context';
export const Login = () => {
  const {email,password,setEmail,setPassword,signIn} = ViewModel()
  const init = console.log("iniciar sesion");
  ;
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Text style={styles.txt}>BIENVENIDO</Text>
        <View>
          <Icon 
            type='material-community'
            name='account-outline'
            iconStyle={styles.icon}
            size={100}
            color={"white"}
          />
        </View>

        <View style={styles.textContent}>
          <TextInput  placeholder='Correo Electronico'placeholderTextColor={"white"} onChangeText={(text)=>{setEmail(text)}}/>
        </View>

        <View style={styles.textContent}>
          <TextInput  placeholder='Contraseña' placeholderTextColor={"white"} onChangeText={(text)=>{setPassword(text)}}/>
        </View>

        <View>
          <Button title='Iniciar sesion' onPress={() => signIn(email, password)}/>
        </View>

      </View>
    </ScrollView>
  );
};