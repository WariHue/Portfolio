'use client'

import { FavoriteList } from '@/components/FavoriteList'
import { WorkList } from '@/components/Works'
import { Favorite, Works } from '@/utils/types'
import { NextUIProvider, Card, CardBody, CardHeader } from '@nextui-org/react'
import { TbAlertCircle } from 'react-icons/tb'

export default function Home() {
  return (
    <>
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Works</CardHeader>
          <CardBody>
            <div>
              <WorkList works={works}/>
            </div>
        </CardBody>
      </Card>      
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
    title:"What your name?",
    description: "WariHue!"
  },
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)"
  },
  {
    title:"Hello!",
    description: "Hello!"
  },
  {
    title:"Hmm...",
    description: "할 말이 없네요"
  }
]

const works:Works[] = [
{
  title:"Portfolio",
  url:"https://github.com/warihue/Portfolio", 
  description:"It is my portfolio"
}
]
