import  { useContext } from 'react'
import {
    useNavigate,
} from "react-router-dom";
import { Button } from 'primereact/button';
import {HeaderContext} from "../../../context/header/HeaderContext";
import {ProfileUser} from "./ProfileUser";

export const Header = ( ) => {


    const navigate = useNavigate();
    const { title, back } = useContext(HeaderContext)

    return (
        <div className='d-flex justify-content-between'>

            <div className='d-flex gap-2 align-items-center'>
                {
                    back
                    &&
                    <Button className='border-circle text-black border-none hover:surface-100 bg-white'
                            onClick={() => navigate(-1, {replace: true})}

                    >
                    <img src='/icons/arrow-left.svg'
                         alt='arrow-left'
                         className='cursor-pointer'
                    />
                    </Button>
                }

                <h2 className='text-3xl font-bold m-0'>{title}</h2>
            </div>

        </div>
    )
}
