import Post from "@/components/Post";
import Hero from "../components/Hero"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between md:px-24">

      {/* <header className=" sticky z-10 top-0 h-24 bg-black w-full text-white items-center justify-center flex">herder here
      </header> */}

      <Hero />
    

    <div className="flex overflow-scroll  h-[50%]">

      <section className="grid md:grid-cols-3 gap-4  "> 
      
        <p>welcome page </p>
      

      </section>
       </div>


      <footer className="flex w-full h-24 bg-black items-center justify-center text-white sticky bottom-0 mt-4">footer here</footer>
      
    </main>
  );
}
