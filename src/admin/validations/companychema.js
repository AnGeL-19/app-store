
import * as yup from "yup"

export const schemaCompanysForm = yup
    .object({
        nombre: yup.string().min(2, 'Must have more than 2 characters').required('Required'),
    })
    .required()