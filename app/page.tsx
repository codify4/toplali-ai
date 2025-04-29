import AiInput from "@/components/ai-input";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-bold text-4xl text-muted">
      <div className="flex flex-col items-center justify-center w-full gap-5 mt-32">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-7xl">TopLali AI</h1>
          <span className="text-lg w-full text-center mt-5">Welcome to the chatbot with the best user experience...</span>
        </div>
        <AiInput />
      </div>
    </main>
  );
}
