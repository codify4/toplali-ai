'use client'

import React from 'react'
import AiInput from './ai-input';
import { useChatConfig } from '@/hooks/use-chat-config';

const Chat = () => {
    const { messages } = useChatConfig();

    return (
        <div className="flex flex-col items-center justify-center w-full py-24 mx-auto stretch">
            <div className="w-full max-w-4xl space-y-4">
                {messages.map(message => (
                    <div key={message.id} className={`p-4 rounded-lg ${message.role === 'user' ? 'bg-muted/50' : 'bg-primary/10'}`}>
                        <p className="font-medium mb-2">
                            {message.role === 'user' ? 'You' : 'AI'}
                        </p>
                        <div className="whitespace-pre-wrap">
                            {message.parts.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <div key={`${message.id}-${i}`}>{part.text}</div>;
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
                <AiInput />
            </div>
        </div>
    )
}

export default Chat