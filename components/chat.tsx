'use client';

import { useState } from 'react';
import { Message, continueConversation } from '../actions/ai';
import { readStreamableValue } from 'ai/rsc';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { SendIcon } from 'lucide-react';
import ModelSelector from './model-selector';
import AiInput from './ai-input';
import AiResponse from './ai-response';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  if (conversation.length === 0) {
    return (
      <>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <h1 className='text-6xl font-bold text-black dark:text-white'>Chill AI</h1>
          <p className='text-neutral-400 text-base font-poppins-semibold'></p>
          <p className='text-neutral-500 text-base font-poppins mt-4 text-center'>The AI with the cleanest UI</p>
        </div>

        <div className='flex flex-col w-full max-w-4xl border rounded-2xl p-3 focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
          <div className='flex flex-row gap-2 w-full'>
            <Textarea
              placeholder='Enter your prompt here...' 
              className='font-semibold dark:bg-background text-muted'
              value={input}
              onChange={event => {
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
      </>
    )
  }

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='flex-1 w-full overflow-y-auto'>
        <div className='w-full flex flex-col items-center justify-center max-w-4xl space-y-4 px-4 mx-auto py-6'>
          {conversation.map((message, index) => (
            <div 
              key={index} 
              className={`p-4 w-full md:w-2/3 rounded-xl text-black dark:text-white font-semibold ${
                message.role === 'user' 
                  ? 'bg-primary self-end' 
                  : 'bg-neutral-100 dark:bg-secondary/60 self-start border border-border'
              }`}
            >
              <p className="font-medium text-sm mb-2 opacity-80">
                {message.role === 'user' ? 'You' : 'AI'}
              </p>
              <div className="whitespace-pre-wrap text-sm rounded-lg">
                {message.role === 'user' ? (
                  message.content
                ) : (
                  <AiResponse message={message} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='sticky bottom-0 w-full bg-background pt-2'>
        <AiInput 
          input={input} 
          setInput={setInput} 
          conversation={conversation} 
          setConversation={setConversation} 
        />
      </div>
    </div>
  );
}