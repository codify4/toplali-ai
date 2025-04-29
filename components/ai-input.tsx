import React from 'react'
import { Textarea } from './ui/textarea'
import { SendIcon } from 'lucide-react'
import { Button } from './ui/button'
import ModelSelector from './model-selector'

function AiInput() {
    return (
        <div className='flex flex-col w-full max-w-4xl border rounded-2xl p-3 focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
            <div className='flex flex-row gap-2 w-full'>
                <Textarea placeholder='Enter your prompt here...' className='font-semibold' />
                <Button variant='outline' className='rounded-full'>
                    <SendIcon size={20} />
                </Button>
            </div>
            <ModelSelector />
        </div>
    )
}

export default AiInput