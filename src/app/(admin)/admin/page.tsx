"use client"
import { DataTableDemo } from '@/components/shared/Table'
import React, { useState } from 'react'
const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]
export default function Admin() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const pageSize = 10
 
  return (
    <div className='px-2'>
       {/* <DataTable
      columns={[]}
      data={[]}
      totalCount={0}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={setCurrentPage}
      onSearchChange={setSearchQuery}
      filterKey="name"
      isLoading={false}
    /> */}
    <DataTableDemo data={data}/>
    </div>
  )
}
