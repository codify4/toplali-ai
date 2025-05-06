import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-bold text-4xl text-muted">
      <div className="flex flex-col items-center justify-center w-full gap-5 mt-32">
        <Chat />
      </div>
    </main>
  );
}
