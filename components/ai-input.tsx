import React from 'react'
import { Textarea } from './ui/textarea'
import { SendIcon } from 'lucide-react'
import { Button } from './ui/button'
import ModelSelector from './model-selector'
import { continueConversation, Message } from '@/actions/ai'
import { readStreamableValue } from 'ai/rsc'

type AiInputProps = {
    input: string;
    setInput: (input: string) => void;
    conversation: Message[];
    setConversation: (conversation: Message[]) => void;
}

function AiInput({ input, setInput, conversation, setConversation }: AiInputProps) {

    return (
        <div className='w-full max-w-4xl border rounded-2xl p-3 mx-auto focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
            <div className='flex flex-row gap-2 w-full'>
                <Textarea
                    placeholder='Enter your prompt here...' 
                    className='font-semibold dark:bg-background text-muted'
                    value={input}
                    onChange={event => {
                        event.preventDefault();
                        setInput(event.target.value);
                    }}
                />
                <Button
                variant="outline"
                className='rounded-full'
                onClick={async () => {
                    const { messages, newMessage } = await continueConversation([
                    ...conversation,
                    { role: 'user', content: input },
                    ]);

                    let textContent = '';

                    for await (const delta of readStreamableValue(newMessage)) {
                        textContent = `${textContent}${delta}`;

                        setConversation([
                            ...messages,
                            { role: 'assistant', content: textContent },
                        ]);
                    }
                }}
                >
                <SendIcon size={20} />
                </Button>
            </div>
            <ModelSelector />
        </div>
    )
}

export default AiInput