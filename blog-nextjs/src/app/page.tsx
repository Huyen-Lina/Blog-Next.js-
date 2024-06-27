import React from 'react'
import Link from 'next/link'

const Main = () => {
  return (
    <div>
      <div>
      <li>
        <Link href={"./facebook"}>facebook</Link>
      </li>
      </div>
      <div>
        <li>
        <a href='./youtube'>Youtube</a>
        </li>
  
      </div>
      <div>
        <li>
        <a href='./admin'>Admin</a>      
        </li>
  
      </div>
     
      

    </div>
  )
}

export default Main