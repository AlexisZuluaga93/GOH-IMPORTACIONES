import React from 'react'
import { View,ScrollView,Platform,KeyboardAvoidingView } from 'react-native'
import { Text,Icon,Input } from 'react-native-elements'
import { useFormik } from 'formik'
import {styles} from './Styles'
import { CustomButton } from '../../../components'
import { initialValues,validationSchema } from '../login/Login.data'
import { UsuarioViewModel } from './ViewModel'

export const Usuario = ({route}) => {
    const {setValues,...values}= UsuarioViewModel();
    const email = route.params.email    
    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: ()=>{}
      });
    
      const content = (
        <View >
          <Text style={styles.txt}>REGISTRAR DATOS</Text>
          
    
          
            <Input
              style={styles.txtInputut}
              placeholder='Nombre'
              placeholderTextColor={"white"}
              value={values.name}
             // onChangeText={(text)=>setValues({name,cedula,lastName,rol,telefono})}
              leftIcon={<Icon type='material-community'name='rename-outline' iconStyle={styles.leftIcon}/>}
            />
          
    
          
            <Input
              style={styles.txtInputut}
              placeholder='Contraseña'
              placeholderTextColor={"white"}
             // onChangeText={(text) => { formik.setFieldValue("password", text) }}
              secureTextEntry={false}
              value={email}
             // errorMessage={formik.errors.password}
              leftIcon={<Icon type='material-community'name='lock-outline'iconStyle={styles.leftIcon}/>}
            
            />
          
          <CustomButton
            color='white'
            title="GUARDAR"
            onPress={()=> {}
            
            
            }
            loading={true}
          />
        </View>
      );
    
      return Platform.OS === 'ios' ? (
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        >
          <ScrollView contentContainerStyle={styles.container}>
            {content}
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {content}
        </ScrollView>
      );
}
