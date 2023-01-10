import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="text-center">
      <h1 className=" mt-16 text-2xl font-extrabold">Exploring Next JS!!</h1>
      <h3 className=" text-xl font-bold my-12">This is Home Page</h3>
      <Link href="/login"><button className="btn btn-info">Login</button></Link>
      </div>
    </>
  );
}
