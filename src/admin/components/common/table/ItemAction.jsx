
import { Tooltip } from 'primereact/tooltip';


export const ItemAction = ({label, className ,icon, onClick}) => {
    return (
        <div className='d-flex justify-content-center'>
            <Tooltip target={`.${className}`}/>
            <img className={`icon cursor-pointer ${className}`}
                 src={icon}
                 alt={label}
                 data-pr-tooltip={label}
                 data-pr-position="top"
                 onClick={onClick}
            />
        </div>
    )
}

