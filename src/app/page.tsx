'use client'

import { FavoriteList } from '@/components/FavoriteList'
import { WorkList } from '@/components/Works'
import { handleCopyClipBoard } from '@/utils/functions'
import { Favorite, Skill, Works } from '@/utils/types'
import { NextUIProvider, Card, CardBody, CardHeader, Snippet } from '@nextui-org/react'
import Link from 'next/link'
import { BsDiscord } from 'react-icons/bs'
import { MdEmail, MdContentCopy } from 'react-icons/md'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLogoTypescript } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'

export default function Home() {
  return (
    <>      
      {/* Who am I component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Who am I....</CardHeader>
          <CardBody>
            <div>
              <FavoriteList favorites={favorites}/>
            </div>
        </CardBody>
      </Card>
      {/**/}
      {/* Works component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Works</CardHeader>
          <CardBody>
            <div>
              <WorkList works={works}/>
            </div>
        </CardBody>
      </Card>
      {/**/}
      {/* Skills component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Skills</CardHeader>
          <CardBody>
            할 줄 아는게 있긴한데 적기 귀찮아요
        </CardBody>
      </Card>
      {/**/}
      {/* Contect component*/}
      <Card className='mt-4'>
        <CardHeader className='text-2xl font-bold'>Contact</CardHeader>
        <CardBody className='flex place-items-center'>
          <div className='inline-flex'>
            <div className='mr-[50px]'>
              <Snippet symbol="" color="primary" className="w-full" codeString='warihue2428@gmail.com'>
                <MdEmail className='text-4xl'/>
							</Snippet>
              
            </div>
            <Snippet hideCopyButton symbol="" color="primary" className="w-full mr-[50px] hover:animate-pulse" codeString='https://discord.gg/Ns6kyKuFgx'>
              <Link
                href={'https://discord.gg/Ns6kyKuFgx'}>
                <BsDiscord className='text-4xl text-violet-400'/>
              </Link>
            </Snippet>
            <Snippet hideCopyButton symbol="" color="default" className="w-full hover:animate-pulse" codeString='https://discord.gg/Ns6kyKuFgx'>
              <Link
                href={'https://github.com/WariHue'}>
                <AiOutlineGithub className='text-4xl text-black dark:text-white'/>
              </Link>
            </Snippet>
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
    description: "WariHue!",
    color:'bg-blue-100 dark:bg-blue-900'
  },
  {
    title:"How years old?",
    description: "14 (2009, 02, 28)",
    color:''
  },
  {
    title:"Hello!",
    description: "Hello!",
    color:''
  },
  {
    title:"Hmm...",
    description: "할 말이 없네요",
    color:''
  },
  {
    title:"여섯 칸 채우고 싶은데..",
    description: "Contact의 아이콘 누르면 뭔가 일어나요",
    color:''
  },
  {
    title:"안녕히 계세요!",
    description: "할 말이 없네요",
    color:''
  }
]

const works:Works[] = [
{
  title:"Portfolio",
  url:"https://github.com/warihue/Portfolio", 
  description:"It is my portfolio"
}
]