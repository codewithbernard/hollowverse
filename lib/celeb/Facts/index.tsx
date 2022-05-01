import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact } from "~/lib/celeb/Facts/Fact";

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <div>
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          <div
            key={`${topic}-${i}`}
            className="bg-hollowPurple rounded-lg mx-6 my-8 py-4 px-6 shadow-md"
          >
            <div className="font-bold text-lg mb-2">{topic}</div>

            {factGroup.map((fact, innerI) => {
              return (
                <div key={`${topic}-${i}-${innerI}`} className="mb-8 last:mb-0">
                  <Fact value={fact} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
