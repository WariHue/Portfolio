'use client'

import { ReceiptLists } from '@/components/ReceiptLists'
import { Item, Receipt } from '@/utils/receipt'
import { NextUIProvider, Card, CardBody } from '@nextui-org/react'
import { TbAlertCircle } from 'react-icons/tb'

export default function Home() {
  const re: Item[] = [{ name: 'cookies', price: 1000}]
  const receipts:Receipt[] = [{place:'대동마트', sum:1000, items: re}]
  return (
    <>
      <div className="flex justify-end items-center">
				<div className="flex-grow font-bold text-xl">Receipts</div>
			</div>
      {receipts.length == 0 ? (
        <Card className='mt-4'>
          <CardBody>
            <div className='flex flex-col items-center py-36'>
              <TbAlertCircle className='text-4xl text-blue-500'/>
              <p className="mt-4 text-2xl">
                {' '}
                There{"'"}s no receipts registered.
              </p>
            </div>
          </CardBody>
        </Card>) : (
          <ReceiptLists receipts={receipts}/>
        )}
    </>
  )
}
