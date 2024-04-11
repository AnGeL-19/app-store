
import * as yup from "yup"

export const schemaProductsForm = yup
    .object({
      
        games: yup.object().shape({
            name: yup.string().required('Selection option'),
        }),
        companies: yup.object().shape({
            name: yup.string().required('Selection option'),
        }),
        stock: yup.string().min(2, 'Should be more 2 characters').required('Required'),
        price: yup.string().min(2, 'Should be more 2 characters').required('Required'),
    })
    .required()