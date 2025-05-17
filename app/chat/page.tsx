import { getSession } from "@/actions/auth-actions";
import Chat from "@/components/chat/chat";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  const session = await getSession();
  if (!session) {
    redirect("/signin");
  }

  return (
    <main className="flex flex-col items-center justify-center font-bold text-4xl text-muted">
      <div className="flex flex-col items-center justify-center w-full gap-5 h-full">
        <Chat />
      </div>
    </main>
  );
}