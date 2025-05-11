'use client'

import React from 'react'
import AiInput from './ai-input';
import { useChat } from '@ai-sdk/react';

const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit, isLoading, } = useChat();

    if (messages.length === 0) {
      return (
        <>
          <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-bold text-white'>Clean AI</h1>
            <p className='text-neutral-400 text-base font-poppins-semibold'></p>
            <p className='text-neutral-500 text-base font-poppins mt-4 text-center'>The AI with the cleanest UI</p>
          </div>

          <AiInput 
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            input={input}
          />
        </>
      )
    }

    return (
      <div className="flex flex-col items-center justify-between w-full py-24 mx-auto h-full">
        <div className="w-full flex flex-col items-center justify-center max-w-4xl space-y-4">
          {isLoading && (
            <div className="p-4 rounded-lg bg-blue-500/10 text-black dark:text-white">
              <p className="font-medium">Loading...</p>
            </div>
          )}
          {messages.map(message => (
            <div key={message.id} className={`p-4 w-1/3 rounded-xl ${message.role === 'user' ? 'bg-primary self-end' : 'bg-primary/10 self-start'}`}>
              <p className="font-medium text-sm mb-2">
                {message.role === 'user' ? 'You' : 'AI'}
              </p>
              <div className="whitespace-pre-wrap">
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                        case 'text':
                          return <div className="text-sm text-black dark:text-white rounded-lg" key={`${message.id}-${i}`}>{part.text}</div>;
                        case 'tool-invocation':
                          return (
                              <pre key={`${message.id}-${i}`} className="text-xs bg-muted p-2 rounded my-2 overflow-auto">
                                {JSON.stringify(part, null, 2)}
                              </pre>
                          );
                        case 'file':
                        case 'reasoning':
                        case 'source':
                        case 'step-start':
                          return (
                              <pre key={`${message.id}-${i}`} className="text-xs bg-muted p-2 rounded my-2 overflow-auto">
                                {JSON.stringify(part, null, 2)}
                              </pre>
                          );
                        default:
                          return null;
                    }
                  })}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-4xl mt-8">
          <AiInput 
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            input={input}
          />
        </div>
      </div>
    )
}

export default Chat