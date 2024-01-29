import { useState } from "react"

export const UsuarioViewModel = () => {
    const[values,setValues]=useState({
        rol:"",
        name:"",
        lastName:"",
        telefono:"",
        cedula:"",
    })

  return {
    ...values
  }
}
