'use client'
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-zinc-800 h-screen">
      <div className="flex justify-center">
        <h1 className="mt-10 text-3xl font-semibold text-white">
          About Me
        </h1>
      </div>
      <p className="flex justify-center mt-10 text-white text-xl px-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora magni, quo,
        explicabo et optio nostrum ipsa eos hic non, sit earum aspernatur incidunt fuga
        doloribus rem ad impedit mollitia harum. Veritatis voluptas, quos recusandae
        voluptate pariatur tempora dolorem nobis beatae est excepturi asperiores autem
        labore sequi necessitatibus aspernatur similique repellat quaerat cum quas corporis
        vel. Pariatur nobis alias commodi expedita asperiores aperiam velit totam a non,
        corrupti, quaerat nisi doloribus ab error placeat repudiandae dolorem nulla! Debitis,
        nobis! Doloribus, natus praesentium, culpa distinctio vel iste eos veritatis minus illum
        harum aliquid? Accusantium voluptatem perferendis, repellendus eligendi harum nemo repellat
        reiciendis.
      </p>
      <div className="flex justify-center">
        <button 
          className="bg-zinc-400 mt-6 rounded-full text-white p-4"
          onClick={() => router.push('/') }
        >
          click me
        </button>
      </div>
    </div>
  );
}