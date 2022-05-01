import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

const wrapperClass = "flex justify-center flex-wrap";
const tagClass =
  "m-1 bg-hollowTeal font-semibold text-sm py-1 px-4 rounded-full";

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div>
      <div className={wrapperClass}>
        {tags.regular.map((t) => (
          <div className={tagClass} key={t.tag.name}>
            {t.tag.name}
          </div>
        ))}
      </div>

      <p className="text-center text-sm my-2">Maybe</p>
      {tags.lowConfidence.length > 0 && (
        <div className={wrapperClass}>
          {tags.lowConfidence.map((t) => (
            <div className={tagClass} key={t.tag.name}>
              {t.tag.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
