import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="bg-hollowOrange rounded-lg mx-6 my-8 py-4 px-6 shadow-md flex flex-col items-center mx-6">
        <Image
          width={50}
          height={50}
          alt="Hollowverse"
          src="/images/letter-logo.png"
        />

        <p className="text-sm text-center my-4 ">
          Hollowverse is about the important <br />
          people and their beliefs.
        </p>

        <p className="text-sm font-medium text-slate-400">
          Email us at{" "}
          <a href="mailto:hollowverse@hollowverse.com">
            hollowverse@hollowverse.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
