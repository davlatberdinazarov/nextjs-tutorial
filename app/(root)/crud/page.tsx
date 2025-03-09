import { AddData } from '@/components/crud/crud-dialogs/add-dialog'
import ClientSideRendering from '@/components/crud/csr'
import StaticSideGeneration from '@/components/crud/ssg'
import ServerSideRendering from '@/components/crud/ssr'
import React from 'react'

export default function UsersPage() {
  return (
    <section>
      <h1 className=' text-center text-xl my-4'>Users Page</h1>
      {/* Add your code here to fetch and display user data */}
      <div className=' flex justify-end'>
        <AddData/>
      </div>
      <div>
        <ClientSideRendering/>
        {/* <ServerSideRendering/> */}
        <StaticSideGeneration/>
      </div>
    </section>
  )
}
