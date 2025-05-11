'use client';

import { useState } from 'react';
import { Message, continueConversation } from '../actions/ai';
import { readStreamableValue } from 'ai/rsc';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { SendIcon } from 'lucide-react';
import ModelSelector from './model-selector';
import AiInput from './ai-input';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  if (conversation.length === 0) {
    return (
      <>
        <div className='w-full flex flex-col items-center justify-center mt-32'>
          <h1 className='text-6xl font-bold text-white'>Chill AI</h1>
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
    <div className='flex flex-col items-center justify-between w-full gap-10 mx-auto h-full'>
      <div className='w-full flex flex-col items-center justify-center max-w-4xl space-y-4'>
        {conversation.map((message, index) => (
          <div key={index} className={`p-4 w-1/3 rounded-xl ${message.role === 'user' ? 'bg-primary self-end' : 'bg-primary/50 self-start'}`}>
            <p className="font-medium text-sm mb-2">
              {message.role === 'user' ? 'You' : 'AI'}
            </p>
            <div className="whitespace-pre-wrap text-sm text-black dark:text-white rounded-lg">
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col w-full max-w-4xl border rounded-2xl p-3 focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
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
    </div>
  );
}