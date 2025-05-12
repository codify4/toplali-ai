'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Check, ChevronRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const models = [
  { value: 'Gemini 2.0 Flash Lite', label: 'Gemini 2.0 Flash Lite' },
  { value: 'Gemini 2.0 Flash', label: 'Gemini 2.0 Flash' },
  { value: 'Gemini 2.0 Pro', label: 'Gemini 2.0 Pro' },
  { value: 'Mistral 7B', label: 'Mistral 7B' },
  { value: 'Llama 3.1 8B', label: 'Llama 3.1 8B' },
  { value: 'Llama 3.1 70B', label: 'Llama 3.1 70B' }
]

function ModelSelector() {
  const [open, setOpen] = React.useState(false)
  const [selectedModel, setSelectedModel] = React.useState(models[0])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-fit flex flex-row justify-center items-center rounded-full border bg-primary hover:bg-primary/80"
        >
          <div className="text-xs font-medium">{selectedModel.label}</div>
          <ChevronRight />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[200px] p-2 bg-primary rounded-xl" side="right" align="end">
        <div className="space-y-2">
          {models.map((model) => (
            <Button
              key={model.value}
              variant="ghost"
              className="w-full justify-start hover:bg-[#FFF6D9]"
              onClick={() => {
                setSelectedModel(model)
                setOpen(false)
              }}
            >
              <Sparkles />
              {model.label}
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedModel.value === model.value ? "opacity-100" : "opacity-0"
                )}
              />
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ModelSelector