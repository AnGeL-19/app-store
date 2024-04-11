
import * as yup from "yup"

export const schemaProductsForm = yup
    .object({
      
        game: yup.object().shape({
            name: yup.string().required('Selection option'),
        }),
        company: yup.object().shape({
            name: yup.string().required('Selection option'),
        }),
        stock: yup.string().min(2, 'Should be more than 1').required('Required'),
        price: yup.string().min(2, 'Should be more than 100 ').required('Required'),
    })
    .required()