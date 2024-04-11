import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../context/header/HeaderContext';
import { ProductsTable } from './components/table/ProductsTable';
import { productFilter } from '../filters/productFilter';
import { ModalProduct } from './components/modal/ModalProduct';

export const ProductsHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)

  useEffect(() => {
      handleHandleTitle('Products', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

  const products = [
    {
        id: 1001,
        game: 'Halo 1',
        company: 'XBOX',
        price: '$1,000',
        stock: 10,
    },
    {
      id: 1002,
      game: 'GTA5',
      company: 'PlayStation',
      price: '$1,500',
      stock: 10,
  },
  {
    id: 1003,
    game: 'Mario',
    company: 'Nintendo',
    price: '$1,300',
    stock: 10,
  }]

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  return (
    <>
      <ProductsTable data={products} filters={productFilter} setData={setData} setVisible={setVisible} />
      <ModalProduct dataForm={data} setVisible={setVisible} visible={visible}/>
    </>
    
  )
}
