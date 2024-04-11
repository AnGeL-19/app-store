import {
    useNavigate,
} from "react-router-dom";
import {ItemSidebar} from "./ItemSidebar";

export const ItemsContentMenu = () => {

    const navigate = useNavigate();
    const items = [
        {
            label: 'Products',
            command: () => {
                navigate(`/admin/products`, {replace: true});
            }
        },
        {
            label: 'Games',
            command: () => {
                navigate(`/admin/games`, {replace: true});
            }
        },
        {
            label: 'Company',
            command: () => {
                navigate(`/admin/companies`, {replace: true});
            }
        }

    ];

    return (
        <ul className='list-none flex flex-col gap-4 p-0'>
            {
                items.map(item => (
                    <li key={item.label}>
                        <ItemSidebar icon={item.icon} label={item.label}
                                     fnComponent={() => item.command()}/>
                    </li>
                ))

            }
        </ul>
    )
}
