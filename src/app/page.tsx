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
          시키면 배워올게요!  
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
    title:"What's your name?",
    description: "WariHue!",
    color:'bg-sky-100 dark:bg-sky-900',
    url:""
  },
  {
    title:"How old are you?",
    description: "14 (2009, 02, 28)",
    color:'bg-green-100 dark:bg-green-900',
    url:""
  },
  {
    title:"What's your gender?",
    description: "MALE!",
    color:'bg-pink-100 dark:bg-pink-900',
    url:""
  },
  {
    title:"Are you healty?",
    description: "No! I'm not healty🥲",
    color:'bg-blue-100 dark:bg-blue-900',
    url:""
  },
  {
    title:"GIVE ME MONEY!",
    description: "돈 주세요",
    color:"bg-emerald-100 dark:bg-emerald-900",
    url:"https://toss.me/warihue"
  },
  {
    title:"안녕히 계세요!",
    description: "할 말이 없네요",
    color:'bg-rose-100 dark:bg-rose-900',
    url:""
  }
]

const works:Works[] = [
{
  title:"Portfolio",
  url:"https://github.com/warihue/Portfolio", 
  description:"It is my portfolio"
}
]