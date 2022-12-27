import React from 'react'
import { CircularProgress } from "@material-ui/core";

function Loading() {
    return (
        <div className='h-[100vh] flex flex-col bg-[#FFFFFF] justify-center'>
            <div className='w-[100%] flex justify-center'>
                <div className='text-center text-[#ffff]'>
                    <div className='mt-[50px]'>
                        <CircularProgress color='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading