import * as Yup from 'yup'

export function initialValues(){
    return{
        email:"",
        password:"",
        rol:"",
        name:"",
        lastName:"",
        telefono:"",
        cedula:"",
    }
}

export function validationSchema(){
    return Yup.object({
        email:Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
        password:Yup.string()
        .required("La contraseña es obligatoria")
    })
}