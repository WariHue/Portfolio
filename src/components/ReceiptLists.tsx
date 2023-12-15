'use client'

import { clickReceipt } from '@/utils/functions'
import { Receipt } from '@/utils/receipt'
import { Card, CardBody } from '@nextui-org/react'
import React, { useState } from 'react'
import { TbAlertCircle } from 'react-icons/tb'

export const ReceiptLists: React.FC<{ receipts: Receipt[] }> = ({ receipts }) => {
  return (
    <>
      <div onClick={() => clickReceipt(receipts[0].place)}>
        <Card className='mt-4'>
          <CardBody>
            Receipt
            <Card className='mt-4'>
              <CardBody>
                <div className='items-center'>
                  {receipts[0].place}{' '}{receipts[0].sum + '₩'}
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  )
}