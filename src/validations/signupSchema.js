import { object, string,ref} from 'yup'

export const signupSchema = object({
    email:string()
        .email("Ingrese un correo electrónico válido")
        .required("Ingrese un correo electrónico"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .required("Ingrese una contraseña"),
    confirmPassword:string()
        .oneOf([ref("password")],"las contraseñas ingresadas no son iguales") 
        .required("vuelva a ingresar el correo electrónico")
})