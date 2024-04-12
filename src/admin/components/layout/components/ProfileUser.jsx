
import { Avatar } from 'primereact/avatar';
import MenuSide from '../../common/MenuSide';


export const ProfileUser = ()  => {


    return (

            <div className='container-profile flex items-center gap-2 p-1'>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle"/>
                <span className='hidden sm:block'>Juan Rodriguez</span>
                <MenuSide />
            </div>

    )
}
