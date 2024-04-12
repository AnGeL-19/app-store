import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';
import { ModalUser } from './modal/ModalUser';
import { useStoreLogin } from '../../context/storage-login/storageLogin';
import { Button } from 'primereact/button';

export const ProfileHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)

  const user = useStoreLogin(state => state.user);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
      handleHandleTitle('Profile', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);




  return (
    <>
      <div className='grid'>
        <div className='w-full flex justify-end'>
          <Button label="Modify"
                        type="button"
                        size='large'
                        className="btn-font text-white px-5 py-2 bg-dark p-3 border-none"
                        onClick={ () => setVisible(true) }
                />
        </div>
        <div className='flex flex-wrap gap-4'>

        <div className='min-w-44 w-2/6'>
            <span>Name</span>
            <div className='w-full p-3 shadow'>
              {user.name}
            </div>
          </div>
          
          <div className='min-w-44  w-2/6'>
            <span>Email</span>
            <div className='w-full p-3 shadow'>
              {user.email}
            </div>
          </div>

        </div>
        
      </div>
      <ModalUser dataForm={user} setVisible={setVisible} visible={visible} />
    </>
  )
}
