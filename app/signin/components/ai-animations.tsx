"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function AIAnimation() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState("")

  const demos = [
    {
      question: "Create a content calendar for my marketing campaign",
      answer: "Here's your content calendar with posts scheduled across multiple platforms.",
      visual: (
        <div className="grid grid-cols-3 gap-2 p-4 bg-background/95 dark:bg-background/80 rounded-lg shadow-lg">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-2xl bg-primary/20 border border-border flex items-center justify-center text-xs p-1 text-center font-bold"
            >
              {
                [
                  "Blog Post",
                  "Instagram",
                  "Newsletter",
                  "YouTube",
                  "Twitter",
                  "Product Demo",
                  "Webinar",
                  "Case Study",
                  "Email Campaign",
                ][i]
              }
            </div>
          ))}
        </div>
      ),
    },
    {
      question: "Compare GPT-4, Claude, and Gemini models",
      answer: "Here's a comparison of the top AI models available in Chill AI:",
      visual: (
        <div className="flex flex-col gap-2 p-4 bg-background/95 dark:bg-background/80 rounded-lg shadow-lg">
          {["Mistral 7B", "Llama 3", "Gemini 2.0"].map((model, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-xl border border-border bg-primary/20 dark:bg-primary/10">
              <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-xs">
                {model.charAt(0)}
              </div>
              <div className="text-sm">{model}</div>
              <div className="ml-auto flex">
                {[...Array(5 - i)].map((_, j) => (
                  <div key={j} className="w-2 h-4 bg-muted mx-0.5 rounded-sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      question: "Generate an image of a futuristic coffee shop",
      answer: "Here's your generated image:",
      visual: (
        <div className="p-4 bg-background/95 dark:bg-background/80 rounded-lg shadow-lg">
          <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 rounded-md flex items-center justify-center">
            <div className="grid grid-cols-3 grid-rows-3 gap-1 w-4/5 h-4/5">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="bg-primary/20 rounded-sm animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    // Reset typing animation when demo changes
    setIsTyping(true)
    setTypedText("")

    const text = demos[currentDemo].answer
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prev) => prev + text.charAt(currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentDemo])

  useEffect(() => {
    // Cycle through demos
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-xl p-6 rounded-3xl bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 "
        >
          {/* User Question */}
          <div className="flex items-start gap-3">
            <div className="flex-1 p-3 bg-primary rounded-lg">
              <p className="font-medium text-sm mb-2 opacity-80">
                You
              </p>
              <p className="text-sm text-black dark:text-white">{demos[currentDemo].question}</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-3">
            <div className="flex-1 p-3 bg-neutral-100 dark:bg-secondary/60 rounded-lg">
              <p className="font-medium text-sm mb-2 opacity-80">
                AI
              </p>
              <p className="text-sm text-black dark:text-white mb-3">
                {typedText}
                {isTyping && <span className="inline-block w-1.5 h-4 bg-primary ml-0.5 animate-pulse"></span>}
              </p>

              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {demos[currentDemo].visual}
                </motion.div>
              )}
            </div>
          </div>

          {/* AI Model Selector */}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1 text-xs shadow-sm">
                <span className="mr-2 text-black dark:text-white">AI Model:</span>
                <span className="font-medium text-black dark:text-white flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {["Lamma 3", "Mistral 7B", "Gemini 2.0"][currentDemo]}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating Messages Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: "110%",
              opacity: 0.3 + Math.random() * 0.4,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: "-110%",
              x: `calc(${Math.random() * 100 - 50}% + ${Math.sin(i) * 50}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15 + i * 5,
              ease: "linear",
              delay: i * 3,
            }}
            className="absolute"
          >
            <div className="bg-primary/10 dark:bg-primary/5 p-2 rounded-lg flex items-center gap-2 shadow-sm">
              <MessageSquare size={16} className="text-primary/50" />
              <div className="w-20 h-2 bg-primary/20 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
