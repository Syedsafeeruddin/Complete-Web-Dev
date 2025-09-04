import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffect  } from "@/components/ui/typewriter-effect";
import { Vortex } from "@/components/ui/vortex";
// import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((prev) => prev + 1)
  }
  const subtractCount = () => {
    setCount((prev) => prev - 1)
    if(count == 0){
      setCount(() => count)
    }
  }


  const resetCount = () => {
    setCount(() => 0)
  }

const words = [
  { text: "A\u00A0", className: "text-white text-2xl" },
  { text: "Simple\u00A0", className: "text-white text-2xl" },
  { text: "Counter\u00A0", className: "text-white text-2xl" },
  { text: "App.", className: "text-blue-500 text-2xl" },
];


  return (
    <div className="bg-black flex min-h-svh flex-col items-center justify-center">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
      <BackgroundGradient>
      <Card className='w-lg bg-gray-800 border-black'>
        <CardHeader>
          <CardTitle className='flex items-center justify-center text-5xl text-gray-300'>Counter App</CardTitle>
          <CardDescription className='flex items-center justify-center text-2xl text-gray-300'>
             <TypewriterEffect words={words} />
          </CardDescription>
        </CardHeader>
        <CardContent className='flex items-center justify-center text-5xl text-gray-300'>
          <p>{count}</p>
        </CardContent>
        <CardFooter className='flex items-center justify-center gap-2'>
          <HoverBorderGradient>
          <button
          aria-label="Increase count"
          onClick={addCount}
          borderRadius="1.75rem"
          > Count + 1
          </button>
          </HoverBorderGradient>
          <HoverBorderGradient>
          <button
          aria-label="Decrease count"
          onClick={subtractCount}
          borderRadius="1.75rem"
          > Count - 1
          </button>
          </HoverBorderGradient>
          <HoverBorderGradient>
          <button
          aria-label="Reset count"
          onClick={resetCount}
          borderRadius="1.75rem"
          > Reset Button
          </button>
          </HoverBorderGradient>
        </CardFooter>
      </Card>
      </BackgroundGradient>
      </Vortex>
    </div>
  );
}

export default App;
