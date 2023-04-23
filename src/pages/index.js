import Image from "next/image";
import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const colours = await prisma.forza_Colours.findMany();

  return {
    props: { colours },
  };
}

export default function Home({ colours }) {
  console.log(colours);

  return (
    <main className={`${inter.className} p-8`}>
      Forza Colours
      <div className="flex flex-col gap-8">
        {colours.map((colour) => {
          const hsl_1 = `hsl(
            ${colour.h_1}
            ${colour.s_1 * 100}%
            ${colour.b_1 * 100}%
          )`;

          const hsl_2 = `hsl(
            ${colour.h_2}
            ${colour.s_2 * 100}%
            ${colour.b_2 * 100}%
          )`;

          return (
            <div key={colour.id} className="flex">
              <div className="flex flex-col w-full">
                <p className="text-xs">{colour.make}</p>
                <h3 className="w-full font-semibold">{colour.colour_name}</h3>
                <p className="text-neutral-500">{colour.paint_type}</p>
              </div>
              <div className="flex w-full">
                <div
                  className="w-full h-12"
                  style={{ backgroundColor: hsl_1 }}
                ></div>
                {colour.hf_2 !== null && (
                  <div
                    className="w-full h-12"
                    style={{ backgroundColor: hsl_2 }}
                  ></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
