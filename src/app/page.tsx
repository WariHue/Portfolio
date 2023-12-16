'use client'

import { FavoriteList } from '@/components/FavoriteList'
import { WorkList } from '@/components/Works'
import { Favorite, Works } from '@/utils/types'
import { NextUIProvider, Card, CardBody, CardHeader } from '@nextui-org/react'
import { TbAlertCircle } from 'react-icons/tb'

export default function Home() {
  return (
    <>
      <WorkList works={works}/>  
      {/* Who am I component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl'>Who am I....</CardHeader>
          <CardBody>
            <div>
              <FavoriteList favorites={favorites}/>
            </div>
        </CardBody>
      </Card>
      {/**/}
    </>
  )
}

const favorites:Favorite[] = [
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)"
  },
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)"
  },
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)"
  },
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)"
  }
]

const works:Works[] = [
{
  title:"Portfolio",
  url:"https://github.com/warihue/Portfolio", 
  description:"It is my portfolio"
}
]
