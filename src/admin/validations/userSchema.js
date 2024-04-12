
import * as yup from "yup"

export const schemaUserForm = yup
    .object({
        name: yup.string().min(2, 'Must have more than 2 characters').required('Required'),
    })
.required()