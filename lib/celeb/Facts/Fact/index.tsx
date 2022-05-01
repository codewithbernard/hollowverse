import Link from "next/link";
import React from "react";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";
import { Fact as TFact } from "~/lib/components/types";

const linkClass = "text-xs underline mr-2";

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div>
      <div>
        <p className="text-xs text-slate-400">{value.date}</p>
      </div>

      <div>
        {(value.type === "quote" && (
          <div className="py-2">
            <p className="text-sm font-medium	text-slate-400 mb-2">
              {value.context}, {name} said
            </p>

            <blockquote className="text-sm pl-2 mt-4 border-l-2 border-hollowPurpleDark">
              <p>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == "fact" && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div>
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name} className="text-sm font-medium text-slate-400">
              # {t.isLowConfidence && "Possibly "}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div>
        <Link href={value.source}>
          <a className={linkClass}>Source</a>
        </Link>
        <Link href={value.forumLink}>
          <a className={linkClass}>Forum link</a>
        </Link>
      </div>
    </div>
  );
};
