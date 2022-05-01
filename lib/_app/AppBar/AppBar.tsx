import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AppBar = () => {
  return (
    <nav>
      <section className="py-10 flex flex-col items-center mb-4">
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
              className="scale-90	text-base	text-black placeholder:text-slate-600 bg-gradient-to-r from-hollowTeal via-hollowPurple to-hollowOrange shadow-sm rounded-lg font-semibold mt-2 py-2 px-4 text-base focus:outline-none"
              placeholder="Search for a celebrity"
              type="search"
            />
          </div>
        </div>
      </section>
    </nav>
  );
};
