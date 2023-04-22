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
  return (
    <main className={`${inter.className}`}>
      Forza Colours
      {colours.map((colour, index) => (
        <p key={index}>{colour.colour_name}</p>
      ))}
    </main>
  );
}
