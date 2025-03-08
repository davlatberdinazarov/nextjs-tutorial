import ClientSideRendering from '@/components/crud/csr'
import StaticSideGeneration from '@/components/crud/ssg'
import ServerSideRendering from '@/components/crud/ssr'
import React from 'react'

export default function UsersPage() {
  return (
    <section>
      <h1>Users Page</h1>
      <p>This is the Users Page.</p>
      {/* Add your code here to fetch and display user data */}
      <div>
        <ClientSideRendering/>
        {/* <ServerSideRendering/> */}
        {/* <StaticSideGeneration/> */}
      </div>
    </section>
  )
}
