import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';
import { ProductsTable } from './components/table/ProductsTable';
import { productFilter } from '../filters/productFilter';
import { ModalProduct } from './components/modal/ModalProduct';
import { TableSkeleton } from '../common/table/TableSkeleton';
import { productsTableSkeleton } from '../skeleton/productsTableSkeleton'
import { useProducts } from '../../hooks/useProducts';

export const ProductsHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)
  
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
      handleHandleTitle('Products', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

   const { data: dataProducts, isFetching } = useProducts();

    if (isFetching){
        return <TableSkeleton columns={productsTableSkeleton}/>
    }


  return (
    <>
      <ProductsTable data={dataProducts.data} filters={productFilter} setData={setData} setVisible={setVisible} />
      <ModalProduct dataForm={data} setVisible={setVisible} visible={visible}/>
    </>
    
  )
}
