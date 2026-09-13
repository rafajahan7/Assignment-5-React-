import { use, useState } from "react";
import { toast } from "react-toastify";
import type { ITech } from "../../types/Types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  techPromise: Promise<ITech[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {

  const technologies = use(techPromise);

  
  const [selectedTechs, setSelectedTechs] = useState<ITech[]>([]);


 
  const handleAddToStack = (tech: ITech) => {

    const alreadyAdded = selectedTechs.some(
      (item) => item.id === tech.id
    );

   
    if (alreadyAdded) {

      toast.warning(
        `${tech.name} is already in your stack!`
      );

      return;
    }

  
    setSelectedTechs([...selectedTechs, tech]);

    toast.success(
      `${tech.name} added to your stack!`
    );
  };


 
  const handleRemove = (id: string) => {

    const tech = selectedTechs.find(
      (item) => item.id === id
    );

    const remainingTechs = selectedTechs.filter(
      (tech) => tech.id !== id
    );

    setSelectedTechs(remainingTechs);

    if (tech) {
      toast.info(
        `${tech.name} removed from your stack!`
      );
    }
  };



  const handleRemoveAll = () => {
    if (selectedTechs.length === 0) {
      return;
    }

    setSelectedTechs([]);

    toast.info(
      "All technologies removed from your stack!"
    );
  };


  return (
    <section className="pt-4 pb-10">

     
      <div className="max-w-6xl mx-auto px-4 mb-5">

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">

          Explore the{" "}

          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>

        </h2>

        <p className="text-[10px] text-gray-400 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-4">


        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">

          {technologies.map((tech) => (

            <TechnologyCard
              key={tech.id}
              tech={tech}

              isAdded={selectedTechs.some(
                (item) => item.id === tech.id
              )}

              onAdd={handleAddToStack}
            />

          ))}

        </div>

        <YourStack
          selectedTechs={selectedTechs}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>

    </section>
  );
};

export default Technologies;