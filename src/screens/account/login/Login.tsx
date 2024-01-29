import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { styles } from './Styles';
import { ViewModel } from './ViewModel';
import { CustomButton, Modal } from '../../../components';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './Login.data';

export const Login = () => {
  const { signIn, showPassword, setShowPassword } = ViewModel();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      console.log(formValue);
      signIn(formValue.email, formValue.password,formValue);
      
    },
  });

  const content = (
    <View >
      <Text style={styles.txt}>BIENVENIDO</Text>
      <View  style={styles.iconContainer}>
        <Icon
          type='material-community'
          name='account'
          iconStyle={styles.icon}
          size={100}
          color={"#004443"}
        />
      </View>

      
        <Input
          style={styles.txtInputut}
          placeholder='Correo Electronico'
          placeholderTextColor={"white"}
          onChangeText={(text) => { formik.setFieldValue("email", text) }}
          value={formik.values.email}
          errorMessage={formik.errors.email}
          leftIcon={<Icon type='material-community'name='email-outline' iconStyle={styles.leftIcon}/>}
          
        />
      

      
        <Input
          style={styles.txtInputut}
          placeholder='Contraseña'
          placeholderTextColor={"white"}
          onChangeText={(text) => { formik.setFieldValue("password", text) }}
          secureTextEntry={showPassword}
          value={formik.values.password}
          errorMessage={formik.errors.password}
          leftIcon={<Icon type='material-community'name='lock-outline'iconStyle={styles.leftIcon}/>}
          rightIcon={
            showPassword ? 
            <Icon 
              type='material-community'
              name='eye-outline'
              onPress={()=>setShowPassword(prevState => !prevState)}
              iconStyle={styles.rightIcon}
            />
             : 
            <Icon
              type='material-community'
              name='eye-off-outline'
              onPress={()=>setShowPassword(prevState => !prevState)}
              iconStyle={styles.rightIcon}
            />
            
          }
        />
      
      <CustomButton
        color='white'
        title="INICIAR SESION"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
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
};
