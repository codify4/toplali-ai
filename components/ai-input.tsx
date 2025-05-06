'use client'

import React from 'react'
import { Textarea } from './ui/textarea'
import { SendIcon } from 'lucide-react'
import { Button } from './ui/button'
import ModelSelector from './model-selector'
import { useChatConfig } from '@/hooks/use-chat-config';

function AiInput() {
    const { input, handleInputChange, handleSubmit } = useChatConfig();

    return (
        <div className='flex flex-col w-full max-w-4xl border rounded-2xl p-3 focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
            <form onSubmit={handleSubmit} className='flex flex-row gap-2 w-full'>
                <Textarea 
                    placeholder='Enter your prompt here...' 
                    className='font-semibold dark:bg-background text-muted' 
                    value={input}
                    onChange={handleInputChange}
                />
                <Button variant='outline' className='rounded-full' type='submit'>
                    <SendIcon size={20} />
                </Button>
            </form>
            <ModelSelector />
        </div>
    )
}

export default AiInput