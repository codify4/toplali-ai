import { UseChatOptions, useChat } from '@ai-sdk/react';

// Create a single configuration for all chat components
export function useChatConfig(overrides?: Partial<UseChatOptions>) {
  return useChat({
    api: '/api/chat',
    maxSteps: 5,
    ...overrides,
  });
} 