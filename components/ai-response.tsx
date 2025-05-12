
import { Message } from '@/actions/ai'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AiResponse = ({ message }: { message: Message }) => {
  return (
    <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
            h1: ({...props}) => <h1 className="text-2xl font-bold my-4 text-black dark:text-white" {...props} />,
            h2: ({...props}) => <h2 className="text-xl font-bold my-3 text-black dark:text-white" {...props} />,
            h3: ({...props}) => <h3 className="text-lg font-bold my-2 text-black dark:text-white" {...props} />,
            p: ({...props}) => <p className="my-2" {...props} />,
            ul: ({...props}) => <ul className="list-disc pl-6" {...props} />,
            ol: ({...props}) => <ol className="list-decimal pl-6" {...props} />,
            li: ({...props}) => <li className="my-1" {...props} />,
            a: ({...props}) => <a className="text-black dark:text-white underline" {...props} />,
            blockquote: ({...props}) => <blockquote className="border-l-4 border-black dark:border-white/30 pl-4 italic bg-muted/30 py-2 rounded-r" {...props} />,
            code: ({inline, className, ...props}: {inline?: boolean} & React.HTMLAttributes<HTMLElement>) => 
            inline ? 
                <code className={`bg-primary border border-muted px-1.5 py-0.5 rounded text-white ${className || ''}`} {...props} /> : 
                <code className={`block bg-primary border border-muted p-3 my-3 rounded-md overflow-x-auto text-white ${className || ''}`} {...props} />,
            pre: ({...props}) => <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono" {...props} />,
            table: ({...props}) => <table className="border-collapse my-4 w-full rounded-md overflow-hidden" {...props} />,
            thead: ({...props}) => <thead className="bg-primary/10" {...props} />,
            tbody: ({...props}) => <tbody className="divide-y divide-border" {...props} />,
            tr: ({...props}) => <tr className="transition-colors hover:bg-muted/50" {...props} />,
            th: ({...props}) => <th className="px-4 py-2.5 text-left font-semibold border-b" {...props} />,
            td: ({...props}) => <td className="px-4 py-2.5" {...props} />,
        }}
    >
        {message.content}
    </ReactMarkdown>
  )
}

export default AiResponse