import React, { useState, useRef } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { SendIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ModelSelector from './model-selector'
import { continueConversation, Message } from '@/actions/ai'
import { readStreamableValue } from 'ai/rsc'

type AiInputProps = {
    input: string;
    setInput: (input: string) => void;
    conversation: Message[];
    setConversation: (conversation: Message[]) => void;
    isProcessing?: boolean;
    setIsProcessing?: (isProcessing: boolean) => void;
}

function AiInput({ 
    input, 
    setInput, 
    conversation, 
    setConversation,
    isProcessing,
    setIsProcessing
}: AiInputProps) {
    const [isLocalLoading, setIsLocalLoading] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    
    // Use either the parent's state or local state for loading
    const isLoading = isProcessing !== undefined ? isProcessing : isLocalLoading;
    const setIsLoading = setIsProcessing || setIsLocalLoading;

    const handleSubmit = async () => {
        if (!input.trim() || isLoading) return;
        
        try {
            setIsLoading(true);
            setInput('');
            
            // Add user message immediately for better UX
            const updatedConversation = [
                ...conversation,
                { role: 'user' as const, content: input }
            ];
            
            setConversation(updatedConversation);
            
            const { messages, newMessage } = await continueConversation(updatedConversation);

            // Start with empty content
            let textContent = '';
            
            // Create a temporary placeholder for the AI response
            setConversation([
                ...messages,
                { role: 'assistant' as const, content: textContent }
            ]);
            
            // Stream in the response
            for await (const delta of readStreamableValue(newMessage)) {
                textContent = `${textContent}${delta}`;
                
                setConversation([
                    ...messages,
                    { role: 'assistant' as const, content: textContent },
                ]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
            // Focus back on textarea after response
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }
    };

    // Handler for pressing Shift+Enter to submit (Enter for new line)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className='w-full max-w-4xl border rounded-2xl p-3 mx-auto focus-visible:ring-[2px] focus-visible:border-ring focus-visible:ring-ring/50'>
            <div className='flex flex-row gap-2 w-full'>
                <Textarea
                    ref={textareaRef}
                    placeholder='Enter your prompt here... (Shift + Enter)' 
                    className='font-semibold dark:bg-background text-muted min-h-[60px] max-h-[200px]'
                    value={input}
                    onChange={event => {
                        event.preventDefault();
                        setInput(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                />
                <Button
                    variant="outline"
                    className='rounded-full'
                    onClick={handleSubmit}
                    disabled={isLoading || !input.trim()}
                >
                    {isLoading ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <SendIcon size={20} />
                    )}
                </Button>
            </div>
            <ModelSelector />
        </div>
    )
}

export default AiInput