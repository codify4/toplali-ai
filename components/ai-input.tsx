import React from 'react'
import { Textarea } from './ui/textarea'
import { SendIcon } from 'lucide-react'
import { Button } from './ui/button'

function AiInput() {
    return (
        <div className='flex flex-row gap-2 w-full border rounded-xl p-3 focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
            <Textarea placeholder='Enter your prompt here...' className='font-semibold' />
            <Button variant='outline' className='rounded-full'>
                <SendIcon size={20} />
            </Button>
        </div>
    )
}

export default AiInput