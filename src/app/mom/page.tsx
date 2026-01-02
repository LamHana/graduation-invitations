"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from "@/src/constant/animation";
import { momSections } from "@/src/constant/data";

function groupImages(images: string[]) {
  const rows = [];
  let index = 0;
  let useThree = true;

  while (index < images.length) {
    const count = useThree ? 3 : 2;
    rows.push(images.slice(index, index + count));
    index += count;
    useThree = !useThree;
  }

  return rows;
}

// Asymmetrical Layout Components
const ScatteredLayout = ({
  section,
  images,
  sectionTitle,
  openLightbox,
  inView,
}: {
  section: (typeof momSections)[0];
  images: string[];
  sectionTitle: string;
  openLightbox: (src: string) => void;
  inView: boolean;
}) => {
  const imageRows = groupImages(images);
  return (
    <motion.div
      className="space-y-3 mb-6 md:space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-2xl font-bold text-[#5C4A3E] md:text-3xl"
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        variants={itemVariants}
      >
        {section.title}
      </motion.h2>
      <motion.p
        className="text-base text-[#8B7355] md:text-lg mb-6"
        variants={itemVariants}
      >
        {section.description}
      </motion.p>
      {imageRows.map((row, rowIndex) => {
        const cols = row.length === 3 ? "grid-cols-3" : "grid-cols-2";

        return (
          <motion.div
            key={rowIndex}
            className={`grid ${cols} gap-3 md:gap-4`}
            variants={containerVariants}
          >
            {row.map((imageSrc: string, imgIndex: number) => (
              <motion.div
                key={imgIndex}
                variants={imageVariants}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(imageSrc)}
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={imageSrc}
                    alt={`${sectionTitle} - ${rowIndex}-${imgIndex}`}
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                    sizes={row.length === 3 ? "(max-width: 768px) 33vw, 33vw" : "(max-width: 768px) 50vw, 50vw"}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      })}

      {section.videos &&
        section.videos.map((video, videoIndex) => {
          return (
            <motion.div
              key={videoIndex}
              variants={imageVariants}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          );
        })}
    </motion.div>
  );
};

const HeroOverlapLayout = ({
  section,
  images,
  openLightbox,
  inView,
}: {
  section: (typeof momSections)[0];
  images: string[];
  sectionTitle: string;
  openLightbox: (src: string) => void;
  inView: boolean;
}) => {
  return (
    <motion.div
      className="relative py-8  min-h-[500px]"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-2xl font-bold text-[#5C4A3E] md:text-3xl"
        variants={itemVariants}
      >
        {section.title}
      </motion.h2>
      <motion.p
        className="text-base text-[#8B7355] md:text-lg mb-6"
        variants={itemVariants}
      >
        {section.description}
      </motion.p>
      <motion.div
        className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
        variants={containerVariants}
      >
        {/* Image 1 – big image */}
        <motion.div
          className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInLeftVariants}
          onClick={() => openLightbox(images[0])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[0]}
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInRightVariants}
          onClick={() => openLightbox(images[1])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[1]}
              alt="Image 2"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInRightVariants}
          onClick={() => openLightbox(images[2])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[2]}
              alt="Image 3"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 4 */}
        <motion.div
          className="col-span-2 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInLeftVariants}
          onClick={() => openLightbox(images[3])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[3]}
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 5 */}
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInRightVariants}
          onClick={() => openLightbox(images[4])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[4]}
              alt="Image 5"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 6 */}
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInRightVariants}
          onClick={() => openLightbox(images[5])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[5]}
              alt="Image 6"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Image 7 */}
        <motion.div
          className="overflow-hidden col-span-2 row-span-1 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          variants={slideInLeftVariants}
          onClick={() => openLightbox(images[6])}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[6]}
              alt="Image 7"
              fill
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>

      {section.videos &&
        section.videos.map((video, videoIndex) => {
          return (
            <motion.div
              key={videoIndex}
              className="mt-3"
              variants={imageVariants}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          );
        })}
    </motion.div>
  );
};

const MomPhotoAlbum = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Create refs for each section
  const youthRef = useRef<HTMLDivElement>(null);
  const weddingRef = useRef<HTMLDivElement>(null);
  const firstChildRef = useRef<HTMLDivElement>(null);
  const completeFamilyRef = useRef<HTMLDivElement>(null);
  const ordinaryYearsRef = useRef<HTMLDivElement>(null);
  const tetRef = useRef<HTMLDivElement>(null);
  const sonWeddingRef = useRef<HTMLDivElement>(null);
  const grandchildrenRef = useRef<HTMLDivElement>(null);

  // useInView hooks for each section
  const youthInView = useInView(youthRef, { amount: 0.2, once: true });
  const weddingInView = useInView(weddingRef, { amount: 0.2, once: true });
  const firstChildInView = useInView(firstChildRef, { amount: 0.2, once: true });
  const completeFamilyInView = useInView(completeFamilyRef, { amount: 0.2, once: true });
  const ordinaryYearsInView = useInView(ordinaryYearsRef, { amount: 0.2, once: true });
  const tetInView = useInView(tetRef, { amount: 0.2, once: true });
  const sonWeddingInView = useInView(sonWeddingRef, { amount: 0.2, once: true });
  const grandchildrenInView = useInView(grandchildrenRef, { amount: 0.2, once: true });

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const renderSection = (section: (typeof momSections)[0]) => {
    switch (section.id) {
      case "youth":
        return (
          <div
            key={section.id}
            ref={youthRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={youthInView}
            />
          </div>
        );
      case "wedding":
        return (
          <div
            key={section.id}
            ref={weddingRef}
          >
            <HeroOverlapLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={weddingInView}
            />
          </div>
        );
      case "first-child":
        return (
          <div
            key={section.id}
            ref={firstChildRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={firstChildInView}
            />
          </div>
        );
      case "tet":
        return (
          <div
            key={section.id}
            ref={tetRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={tetInView}
            />
          </div>
        );
      case "complete-family":
        return (
          <div
            key={section.id}
            ref={completeFamilyRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={completeFamilyInView}
            />
          </div>
        );
      case "ordinary-years":
        return (
          <div
            key={section.id}
            ref={ordinaryYearsRef}
          >
            <HeroOverlapLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={ordinaryYearsInView}
            />
          </div>
        );
      case "grandchildren":
        return (
          <div
            key={section.id}
            ref={grandchildrenRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={grandchildrenInView}
            />
          </div>
        );
      case "son-wedding":
        return (
          <div
            key={section.id}
            ref={sonWeddingRef}
          >
            <ScatteredLayout
              section={section}
              images={section.images}
              sectionTitle={section.title}
              openLightbox={openLightbox}
              inView={sonWeddingInView}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] -mx-4 -my-4 px-4 py-8">
      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="absolute right-4 top-4 text-white text-2xl font-bold hover:opacity-80 transition-opacity z-10"
            onClick={closeLightbox}
            aria-label="Close"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            ×
          </motion.button>
          <motion.div
            className="relative max-h-[90vh] max-w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Full size"
              width={1200}
              height={1600}
              className="max-h-[90vh] w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <motion.h1
            className="mb-4 text-4xl font-bold text-[#5C4A3E] md:text-5xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hành trình của mẹ
          </motion.h1>
          <motion.p
            className="text-base text-[#8B7355] md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Một câu chuyện về tình yêu và gia đình
          </motion.p>
        </motion.div>

        {/* Sections */}
        <div className="mb-12">
          {momSections.map((section) => {
            return renderSection(section);
          })}
        </div>

        {/* Ending Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20 mt-24 text-center"
        >
          <motion.div
            className="rounded-lg bg-[#F5F1EB] p-8 shadow-sm md:p-12"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-2xl leading-relaxed text-[#5C4A3E] md:text-3xl"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cảm ơn mẹ,
              <br />
              vì đã dành cả thanh xuân
              <br />
              để xây dựng một gia đình đầy yêu thương.
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default MomPhotoAlbum;
