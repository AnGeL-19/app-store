
import { Avatar } from 'primereact/avatar';
import {PopupMenu} from "./PupupMenu";


export const ProfileUser = ()  => {


    return (

            <div className='container-profile flex items-center gap-2 p-1'>
                <Avatar image="/images/avatar/user.png" size="large" shape="circle"/>
                <span className='hidden sm:block'>Juan Rodriguez</span>
                <PopupMenu/>
            </div>

    )
}
