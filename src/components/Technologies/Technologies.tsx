import React, { use, useState } from "react";
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
      alert(`${tech.name} is already in your stack!`);
      return;
    }

  
    setSelectedTechs([...selectedTechs, tech]);
  };


  const handleRemove = (id: string) => {

    const remainingTechs = selectedTechs.filter(
      (tech) => tech.id !== id
    );

    setSelectedTechs(remainingTechs);
  };



  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };


  return (
    <section className="py-10">

    
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