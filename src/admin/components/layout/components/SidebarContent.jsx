import {
    useNavigate,
} from "react-router-dom";
import {ItemSidebar} from "./ItemSidebar";
import {ItemsContentMenu} from "./ItemsContentMenu";
import { Avatar } from "primereact/avatar";
import MenuSide from "../../common/MenuSide";
import { useStoreLogin } from "../../../context/storage-login/storageLogin";


export const SidebarContent = () => {

    const navigate = useNavigate();
    const user = useStoreLogin(state => state.user);

    return (
        <aside className='w-60 h-full fixed top-0 pt-10 pb-3 px-4 bg-dark-bold'>
            <div className='h-full flex flex-col justify-between'>
                <div>
                    <div className="w-full d-flex justify-content-center align-items-center mb-5"
                        onClick={() => navigate(`/admin/games`, {replace: true})}
                    >
                        <span className="text-gray-300 text-4xl text-center font-bold block">Kr<img src="/assets/icons/pacman.svg" className="inline "/>enen</span>
                    </div>

                    <nav className='container-items'>

                        <ItemsContentMenu/>

                    </nav>
                </div>
                <div className="bg-dark-light rounded-3xl">
                        <div className="flex justify-between items-center cursor-pointer gap-1">
                            <Avatar 
                            size="large"
                            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" 
                            shape="circle" />
                            <span className="font-bold text-white text-sm">{user.name}</span>
                            <MenuSide/>
                        </div>
                    </div>
            </div>
        </aside>
    )
}
