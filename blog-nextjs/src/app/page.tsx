import React from 'react'
import Link from 'next/link'
import x from "@/style/app.module.css"
import y from "@/style/app2.module.css"
import { Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <div >
      <li className={x['red']}>
        <Link href={"./facebook"}>
        <span className={y['red']}>facebook</span>
        </Link>
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