import Image from "next/image";
import React from "react";
import { sanityImage } from "~/lib/components/sanityio";
import { useCelebContext } from "~/lib/components/StaticPropsContextProvider";

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div>
      <section>
        <header className="flex flex-col items-center py-4 mb-2">
          <div className="rounded-full overflow-hidden w-32	h-32 shadow-md">
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
            />
          </div>

          <h1 className="mt-5 mb-1 text-2xl font-bold	">{context.celeb.name}</h1>
          <h2 className="text-base font-normal text-slate-400">
            Religion, politics, and ideas
          </h2>
        </header>
      </section>
    </div>
  );
};
