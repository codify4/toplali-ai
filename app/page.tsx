import AiInput from "@/components/ai-input";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-bold text-4xl text-muted">
      <h1 className="text-7xl">TopLali AI</h1>

      <div className="flex self-center size-20 rounded-full text-muted dark:bg-primary dark:text-muted w-full">
        <span className="text-lg w-full text-center mt-5">Welcome to the chatbot with the best user experience...</span>
      </div>
      <AiInput />
    </main>
  );
}
