import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t py-6 px-10 sm:px-6 bg-black">
      <div className="max-w-7x; mx-auto text-center">
        <p className="text-muted-foreground">
          Made With ❤️ By{" "}
          <Link
            href={
              "https://drive.google.com/file/d/1WEn2KEBlBE4KPc5U57pDnGVuLg3Dwn8U/view?usp=drive_link"
            }
            className="text-foreground font-semibold"
          >
            Arpit Mandhan
          </Link>
        </p>
      </div>
    </footer>
  );
};
