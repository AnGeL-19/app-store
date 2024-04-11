import {
    useNavigate,
} from "react-router-dom";
import {ItemSidebar} from "./ItemSidebar";
import {ItemsContentMenu} from "./ItemsContentMenu";
import { Avatar } from "primereact/avatar";
import MenuSide from "../../common/MenuSide";


export const SidebarContent = () => {

    const navigate = useNavigate();

    return (
        <aside className='w-60 h-full fixed top-0 pt-10 pb-3 px-4 bg-dark-bold'>
            <div className='h-full flex flex-col justify-between'>
                <div>
                    <div className="w-full d-flex justify-content-center align-items-center mb-5"
                        onClick={() => navigate(`/admin/dashboard`, {replace: true})}
                    >
                        <span className="text-white">Kroenen</span>
                    </div>

                    <nav className='container-items'>

                        <ItemsContentMenu/>

                    </nav>
                </div>
                <div className="">
                        <div className="flex align-items-center cursor-pointer gap-2">
                            <Avatar 
                            size="large"
                            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" 
                            shape="circle" />
                            <span className="font-bold text-white">Amy Elsner</span>
                            <MenuSide/>
                        </div>
                    </div>
            </div>
        </aside>
    )
}
