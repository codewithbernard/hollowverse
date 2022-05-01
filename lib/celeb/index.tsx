import React from "react";
import { CelebPageProps } from "~/lib/components/types";
import { Facts } from "~/lib/celeb/Facts";
import { PageHead } from "~/lib/celeb/PageHead/PageHead";
import { TagCollection } from "~/lib/celeb/TagCollection";
import { TopSection } from "~/lib/celeb/TopSection/TopSection";

export const Celeb = (p: CelebPageProps) => {
  return (
    <main className="max-w-3xl mx-auto">
      <PageHead />

      <TopSection />

      {p.celeb.tags && <TagCollection />}

      {p.celeb.facts && <Facts />}
    </main>
  );
};

export default Celeb;
