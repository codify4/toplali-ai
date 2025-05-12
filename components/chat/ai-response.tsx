import { Message } from '@/actions/ai'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TypingIndicator from './typing-indicator'

const AiResponse = ({ message }: { message: Message }) => {
  // If message content is empty, show typing indicator
  if (!message.content.trim()) {
    return <TypingIndicator />
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({...props}) => <h1 className="text-2xl font-bold text-black dark:text-white" {...props} />,
        h2: ({...props}) => <h2 className="text-xl font-bold text-black dark:text-white" {...props} />,
        h3: ({...props}) => <h3 className="text-lg font-bold text-black dark:text-white" {...props} />,
        p: ({...props}) => <p className="my-2" {...props} />,
        ul: ({...props}) => <ul className="list-disc pl-6" {...props} />,
        ol: ({...props}) => <ol className="list-decimal pl-6" {...props} />,
        li: ({...props}) => <li className="my-1" {...props} />,
        a: ({...props}) => <a className="text-black dark:text-white underline" {...props} />,
        blockquote: ({...props}) => <blockquote className="border-l-4 border-black dark:border-white/30 pl-4 italic bg-muted/30 py-2 rounded-r" {...props} />,
        code: ({inline, className, ...props}: {inline?: boolean} & React.HTMLAttributes<HTMLElement>) => 
        inline ? 
          <code className={`bg-primary border border-muted px-1.5 py-0.5 rounded text-black dark:text-white ${className || ''}`} {...props} /> 
        : 
          <code className={`block bg-primary border border-muted p-3 rounded-md overflow-x-auto text-black dark:text-white ${className || ''}`} {...props} />,
        pre: ({...props}) => <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono" {...props} />,
        table: ({...props}) => <table className="border-collapse w-full rounded-md overflow-hidden" {...props} />,
        thead: ({...props}) => <thead className="bg-primary/10" {...props} />,
        tbody: ({...props}) => <tbody className="divide-y divide-border" {...props} />,
        tr: ({...props}) => <tr className="transition-colors hover:bg-muted/10" {...props} />,
        th: ({...props}) => <th className="px-4 py-2.5 text-left font-semibold border-b" {...props} />,
        td: ({...props}) => <td className="px-4 py-2.5" {...props} />,
      }}
    >{message.content}</ReactMarkdown>
  )
}

export default AiResponse