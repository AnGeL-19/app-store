import React from 'react'

export const ItemPlatform = ({name, icon, color}) => {
  return (
    <div className={`w-1/3 h-[15vh] ${color} flex gap-3 items-center justify-center`}>
        <img src={icon} alt="nintendo" width="44" height="44" />
        <span className="text-3xl  text-white">{name}</span>
    </div>
  )
}
