import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AppBar = () => {
  return (
    <nav>
      <section className="py-6 flex flex-col items-center">
        <div className="flex justify-center">
          <Link passHref href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={250}
                height={30}
                alt="Hollowverse"
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <div>
          {/* Search input */}
          <div>
            <input
              className="bg-slate-100 rounded-lg mt-2 py-2 px-4 text-base focus:outline-none border-slate-100 border-2	focus:border-slate-200 transition-colors duration-300"
              placeholder="Search for a celebrity"
              type="search"
            />
          </div>
        </div>
      </section>
    </nav>
  );
};
