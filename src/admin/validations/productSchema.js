
import * as yup from "yup"

export const schemaProductsForm = yup
    .object({
      
        game: yup.string().min(2, 'Must have more than 2 characters').required('Required'),
        company: yup.object().shape({
            nombre: yup.string().required('Selection option'),
        }),
        stock: yup.number().min(5, 'Must have more than 5').required('Required'),
        price: yup.number().min(2, 'Must have more than 100 ').required('Required'),
    })
    .required()