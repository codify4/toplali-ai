import { Button } from '@/components/ui/button'

const Widgets = ({ setInput }: { setInput: (input: string) => void }) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl px-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <Button
            variant="outline"
            onClick={() => setInput("Write a short story about a robot discovering emotions")}
            className="px-3 py-2 rounded-lg bg-primary dark:bg-primary/5 border hover:bg-primary/10 transition-colors cursor-pointer flex items-center"
        >
            <span className="text-xs font-medium">Creative Writing</span>
        </Button>
        
        <Button 
            variant="outline"
            onClick={() => setInput("Explain quantum computing in simple terms")}
            className="px-3 py-2 rounded-lg bg-primary dark:bg-primary/5 border hover:bg-primary/10 transition-colors cursor-pointer flex items-center"
        >
            <span className="text-xs font-medium">Explain Quantum Computing</span>
        </Button>
        
        <Button 
            variant="outline"
            onClick={() => setInput("What are the key differences between React and Vue?")}
            className="px-3 py-2 rounded-lg bg-primary dark:bg-primary/5 border hover:bg-primary/10 transition-colors cursor-pointer flex items-center"
        >
            <span className="text-xs font-medium">React vs Vue</span>
        </Button>
        
        <Button 
            variant="outline"
            onClick={() => setInput("Create a weekly healthy meal plan for a vegetarian")}
            className="px-3 py-2 rounded-lg bg-primary dark:bg-primary/5 border hover:bg-primary/10 transition-colors cursor-pointer flex items-center"
        >
            <span className="text-xs font-medium">Vegetarian Meal Plan</span>
        </Button>
    </div>
  )
}

export default Widgets