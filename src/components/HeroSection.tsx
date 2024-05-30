
import { Spotlight } from "./ui/SpotLight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="p-4 relative z-10 w-full text-center">
        
            <h1>Master the Art of Music</h1>
            <p>
              Dive into our comprehensive music courses and transform your musical journey today.
              Whether you're a beginner or looking to refine your skills, join us to unlock your
              true potential.
            </p>

            <div className="mt-4">
                <Link href={"/courses"}>
                  <Button borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    Explore Courses
                  </Button>
                    
                </Link>
            </div>

        </div>

    </div>
  )
}

export default HeroSection