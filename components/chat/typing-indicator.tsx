const TypingIndicator = () => {
  return (
    <div className="flex space-x-2 items-center py-2 opacity-80">
      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms', animationDuration: '600ms' }}></div>
      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms', animationDuration: '600ms' }}></div>
      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms', animationDuration: '600ms' }}></div>
      <span className="text-sm text-muted-foreground ml-1 italic">AI is typing...</span>
    </div>
  );
};

export default TypingIndicator; 