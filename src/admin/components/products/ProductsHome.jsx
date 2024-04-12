import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';
import { ProductsTable } from './components/table/ProductsTable';
import { productFilter } from '../filters/productFilter';
import { ModalProduct } from './components/modal/ModalProduct';
import { TableSkeleton } from '../common/table/TableSkeleton';
import { productsTableSkeleton } from '../skeleton/productsTableSkeleton'
import { useQuery } from '@tanstack/react-query';
import { postGamesSearch } from '../../api/gamesApi';

export const ProductsHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)
  
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
      handleHandleTitle('Games', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

   // Queries
   const { data: dataGames, isFetching, isError } = useQuery({ queryKey: ['games'], queryFn: () => postGamesSearch('') })

    console.log(dataGames);

    if (isFetching){
        return <TableSkeleton columns={productsTableSkeleton}/>
    }

    if (isError){
      return <div className='w-full'><h2 className='text-2xl text-red-300 text-center'>There was an error loading the data {':('}, <span className='font-bold'>Regresh Page</span></h2></div>
    }

  return (
    <>
      <ProductsTable data={dataGames.data ?? []} filters={productFilter} setData={setData} setVisible={setVisible} />
      <ModalProduct dataForm={data} setVisible={setVisible} visible={visible}/>
    </>
    
  )
}
