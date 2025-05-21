'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/actions/ai';
import AiInput from './ai-input';
import AiResponse from './ai-response';
import Widgets from './widgets';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Chat() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever conversation changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  if (conversation.length === 0) {
    return (
      <>
        <div className='w-full flex flex-col items-center justify-center mt-16 md:mt-32'>
          <h1 className='text-5xl md:text-6xl font-bold text-black dark:text-white animate-fade-in'>Chill AI</h1>
          <p className='text-neutral-400 text-base font-poppins-semibold'></p>
          <p className='text-neutral-500 text-base mt-4 text-center animate-fade-in'>The AI with the cleanest UI</p>
          
          <Widgets setInput={setInput} />
        </div>

        <AiInput
          input={input}
          setInput={setInput}
          conversation={conversation}
          setConversation={setConversation}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />
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
              className={`p-4 rounded-xl text-black dark:text-white font-semibold transition-opacity duration-300 animate-fade-in ${
                message.role === 'user' 
                  ? 'bg-primary self-end w-full md:w-2/3'
                  : 'self-start w-full'
              }`}
            >
              <p className="font-medium text-sm mb-2 opacity-80">
                {message.role === 'user' ? 'You' : null}
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
          {/* Empty div for scrolling to the end */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className='sticky bottom-0 w-full bg-background pt-2'>
        <AiInput 
          input={input} 
          setInput={setInput} 
          conversation={conversation} 
          setConversation={setConversation}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />
      </div>
    </div>
  );
}