import { useState } from "react";

// Este custom hook se encarga de manejar inputs 
export const useForm = ( initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues(initialState);
    }


    const handleInputChange = ({target}:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>  ) => {
        
        setValues({
            ...values,
            [ target.name ]:target.value
            
        })
        
    
    }
    const handleInputChangeCheckBox = ({target}:React.ChangeEvent< HTMLInputElement>) => {
        setValues({
            ...values,
            [ target.name ]:target.checked   
        })
    }
    

    return {
            values:[values,setValues],
            handleInputChange,
            handleInputChangeCheckBox,
            reset        
            };
}

// Este custom hook se encarga de manejar inputs y validaciones de estos
export const useFormValidation = ( initialState:any = {},validateForm:any) => {
    const [formValues, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})

    const reset = ()=>{
        setValues(initialState);
    }


    const handleInputChange = ({target}:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>  ) => {
        
        setValues({
            ...formValues,
            [ target.name ]:target.value
            
        })
        
    
    }
    const handleInputChangeCheckBox = ({target}:React.ChangeEvent< HTMLInputElement>) => {
        setValues({
            ...formValues,
            [ target.name ]:target.checked   
        })
    }
    const changeValueInput = (inputName:string | number ,value:string | boolean | number)=>{
        formValues[inputName] = value
    }
    const checkEerrors =  () =>{
        setErrors(validateForm(formValues));
        console.log(validateForm(formValues));
        return validateForm(formValues);
    }
 
 

    return {
        formValues,
        errors,
        handleInputChange,
        handleInputChangeCheckBox,
        checkEerrors,
        reset,
        setValues,
        changeValueInput
        };
}