import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { HeaderContext } from '../../context/header/HeaderContext';
import { getCompanies } from '../../api/companiesApi';
import { companiesTableSkeleton } from '../skeleton/companiesTableSkeleton';
import { ModalCompany } from './components/modal/ModalCompany';
import { TableSkeleton } from '../common/table/TableSkeleton';
import { CompaniesTable } from './components/table/CompaniesTable';


export const CompaniesHome = () => {

  const { handleHandleTitle } = useContext(HeaderContext)
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
      handleHandleTitle('Company', false)
      return () => {
          handleHandleTitle('', false)
      }
  }, []);

  const { data: dataCompanies, isFetching, isError } = useQuery({ queryKey: ['companies'], queryFn: getCompanies })

    console.log(dataCompanies);

    if (isFetching){
        return <TableSkeleton columns={companiesTableSkeleton}/>
    }

    if (isError){
      return <div className='w-full'><h2 className='text-2xl text-red-300 text-center'>There was an error loading the data {':('}, <span className='font-bold'>Regresh Page</span></h2></div>
    }

  return (
    <>
      <CompaniesTable data={dataCompanies.data ?? []} setData={setData} setVisible={setVisible} />
      <ModalCompany dataForm={data} setVisible={setVisible} visible={visible}/>
    </>
  )
}
