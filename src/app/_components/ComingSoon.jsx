import React, { useEffect } from 'react'
import Image from 'next/image'
import time from '../../../public/time.png'

const ComingSoon = ({open, setOpen, close}) => {
    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden'

        // Re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 bg-black/40 z-50 h-screen w-full flex items-center justify-center text-white text-3xl font-semibold'>
            <div className='min-h-40 py-10 bg-lime-500 rounded-2xl p-5 w-full mx-5 flex flex-col items-center'>
                <Image src={time} alt='time' width={120} />
                <div className='text-2xl mt-2 font-bold text-black'>Feature Coming Soon</div>
                <div className='bg-white text-green-950 px-3 py-2 text-base mt-3 w-[50%] rounded-full text-center hover:bg-gray-300 cursor-pointer' onClick={close}>Close</div>
            </div>
        </div>
    )
}

export default ComingSoon
