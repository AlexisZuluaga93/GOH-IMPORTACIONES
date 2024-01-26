import React from 'react';
import {
  View,
  Text,
  TextInput,
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
      signIn(formValue.email, formValue.password);
    },
  });

  const content = (
    <View>
      <Text style={styles.txt}>BIENVENIDO</Text>
      <View style={styles.iconContainer}>
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
        />
      

      
        <Input
          style={styles.txtInputut}
          placeholder='Contraseña'
          placeholderTextColor={"white"}
          onChangeText={(text) => { formik.setFieldValue("password", text) }}
          secureTextEntry={true}
          value={formik.values.password}
          errorMessage={formik.errors.password}
        />
      
      <CustomButton
        color='white'
        title="Iniciar sesion"
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
