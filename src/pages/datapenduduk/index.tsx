import { kependudukan, kependudukanData } from '@/constant/table'
import React from 'react'
import TableComponent from '@/components/TableComponent';

const index = () => {
    return (
        <div className='py-24 bg-gray-100'>
            <div className="relative overflow-x-auto sm:rounded-lg w-full max-w-2xl mx-auto border-none">
                <h1 className='my-4 text-black text-xl text-center'>Data Kependudukan</h1>
                <TableComponent header={kependudukanData.header} data={kependudukanData.content} />
                <h1 className='my-4 text-black text-xl text-center'>Data Pekerjaan</h1>
                <TableComponent header={kependudukan.header} data={kependudukan.content} />
            </div>
        </div>
    )
}

export default index