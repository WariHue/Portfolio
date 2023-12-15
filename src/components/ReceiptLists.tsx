'use client'

import { Receipt } from '@/utils/receipt'
import React, { useState } from 'react'
import { TbAlertCircle } from 'react-icons/tb'

export const ReceiptLists: React.FC<{ receipts: number[] }> = ({ receipts }) => {
    return (
        <>
            <div className='items-center'>
                {receipts[0]}
            </div>
        </>
    )
}