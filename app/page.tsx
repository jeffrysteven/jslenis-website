import Image from "next/image";
import "../styles/globals.css";
import data from "../data.json";
import { CardLink } from "./components/CardLink";
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex pt-8 sm:pt-0 sm:flex-col-reverse">
        <div className="flex flex-col mb-16 md:pr-6">
          <div id="title" className="sm:text-center">
            <h1 className="font-bold text-3xl md:text-5xl mb-2">{data.name}</h1>
            <h2 className="text-gray-600">
              Software Engineer
            </h2>
          </div>
          <span id="description" className="font-thin">
            Hi! My name&apos;s Jeffry (but everybody calls me Jeff). I currently
            work at <a href="https://www.twilio.com">Twilio</a>. On my off-time
            I like to travel, take photos, DJing and play videogames. I&apos;m
            also{" "}
            <a href="https://medium.com/@jeffry_steven">trying to write more</a>
            .
          </span>
        </div>
        <div className="relative mb-8 sm:mb-4 md:mr-auto pt-6 sm:flex sm:justify-center">
          <Image
            priority
            className="rounded-full"
            id="Jeffry Lenis profile photo"
            alt={data.name}
            src={data.avatar}
            width={176}
            height={80}
          />
        </div>
      </div>
      <div>
        {data.links.map((link) => (
          <CardLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}
