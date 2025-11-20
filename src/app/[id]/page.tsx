"use client";

import { data, guestTypeData } from "@/src/constant/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/src/constant/animation";

import BackgroundImage from "@/src/assets/bg.webp";
import VideoPlayer from "@/src/components/Video";
import QuoteImage from "@/src/assets/quote.webp";
import Link from "next/link";

interface Person {
  id: string;
  name: string;
  type: string;
  message: string;
}

const InvitationPage = () => {
  const params = useParams();
  const id = params?.id as string;
  console.log(id);
  const person = data.find((item: Person) => item.id === id);
  const guestData =
    person?.type && person.type in guestTypeData ? guestTypeData[person.type as keyof typeof guestTypeData] : null;
  // Refs for scroll-triggered animations
  const titleRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const finalSectionRef = useRef(null);

  // useInView hooks
  const titleInView = useInView(titleRef, { amount: 0.3, once: true });
  const firstImageInView = useInView(firstImageRef, {
    amount: 0.3,
    once: true,
  });
  const secondSectionInView = useInView(secondSectionRef, {
    amount: 0.3,
    once: true,
  });
  const thirdSectionInView = useInView(thirdSectionRef, {
    amount: 0.3,
    once: true,
  });
  const finalSectionInView = useInView(finalSectionRef, {
    amount: 0.3,
    once: true,
  });
  if (!person) {
    return (
      <div>
        <h1>Person not found</h1>
        <p>No person found with ID: {id}</p>
      </div>
    );
  }

  if (!guestData) {
    return (
      <div>
        <h1>Guest type not configured</h1>
        <p>No configuration found for type: {person.type}</p>
      </div>
    );
  }

  return (
    <div className="mb-20 w-full overflow-hidden">
      <motion.div
        ref={firstImageRef}
        className="w-full"
        variants={imageVariants}
        initial="hidden"
        animate={firstImageInView ? "visible" : "hidden"}
      >
        <div className="relative h-[175px] w-full">
          <Image
            src={BackgroundImage}
            alt="tap-point-5"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.h2
        ref={titleRef}
        className=" mb-4 py-6 text-center text-2xl font-bold uppercase"
        variants={itemVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
      >
        Thank you {person.name} <br /> for coming
      </motion.h2>

      <motion.div
        ref={secondSectionRef}
        className="relative flex items-center justify-center gap-4 px-4 py-6"
        variants={containerVariants}
        initial="hidden"
        animate={secondSectionInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative top-[-20px]"
          variants={slideInLeftVariants}
        >
          <Image
            src={guestData.image1}
            alt="tap-point-5"
            width={180}
            height={220}
            className="rotate-6 object-cover"
          />
        </motion.div>

        <motion.div
          className="flex w-[120px] flex-col gap-2"
          variants={itemVariants}
        >
          <p
            className="text-2xl font-extrabold text-black-800"
            dangerouslySetInnerHTML={{ __html: guestData.since }}
          />
          <p className=" text-sm text-black-700">{guestData.message}</p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={thirdSectionRef}
        className="relative flex gap-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate={thirdSectionInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative -top-4 left-[5%]"
          variants={slideInLeftVariants}
        >
          <Image
            src={guestData.image2}
            alt="tap-point-5"
            width={180}
            height={220}
            className="-rotate-12 object-cover"
          />

          <p
            className="xsm:text-sm w-[170px] pr-5 pt-9 text-xs text-black-700"
            dangerouslySetInnerHTML={{ __html: guestData.message1 }}
          />
        </motion.div>

        <motion.div
          className="relative"
          variants={slideInRightVariants}
        >
          <Image
            src={guestData.image3}
            alt="tap-point-5"
            width={240}
            height={290}
            className="rotate-6 object-cover"
          />

          <p
            className="xsm:text-sm w-[180px] xsm:pr-4 pr-8 pt-9 text-right text-xs text-black-700"
            dangerouslySetInnerHTML={{ __html: guestData.message2 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={finalSectionRef}
        className="mb-[200px] flex h-[320px] w-full flex-col py-8"
        variants={containerVariants}
        initial="hidden"
        animate={finalSectionInView ? "visible" : "hidden"}
      >
        <div className="relative w-full">
          {guestData.video && (
            <motion.div
              variants={itemVariants}
              className="absolute right-0 top-0 h-auto w-[246px]"
            >
              <VideoPlayer
                src={guestData.video}
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className="h-full w-full object-cover shadow-[2px_2px_17px_0px_rgba(0,0,0,0.45)]"
              />
            </motion.div>
          )}

          {guestData.imageQuote && (
            <div className="absolute right-0 top-0 h-[331px] w-[222px]">
              <Image
                src={guestData.imageQuote}
                alt="tap-point-5"
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="absolute left-0 top-0 h-[331px] w-[222px] translate-x-[10%] translate-y-1/2">
            <motion.img
              src={QuoteImage.src}
              alt="tap-point-5"
              className="h-[331px] w-[222px] object-cover"
              variants={slideInLeftVariants}
            />
            <div className="absolute top-1/4 left-4 right-0 w-[180px]">
              <p className="text-sm text-black-700">{person.message}</p>
              <p className="text-xs text-right font-semibold text-black-700">- {guestData.signature}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8">
        <p className="text-center text-sm text-black-700">{guestData.updateMessage}</p>
        <div className="bg-[#B12828] text-white px-4 py-2 rounded-lg w-full font-bold flex items-center justify-center">
          <Link
            href={guestData.link}
            target="_blank"
          >
            Link hình ở đây nè
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;
