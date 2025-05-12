"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "বাংলাদেশ শিক্ষা মন্ত্রণালয়", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32G0K2iwaVZwHhDRwwQCvIBvAl30WS5DgEg&s" },
  { name: "ONTRUM", logo: "https://i.postimg.cc/sxw5Bx7V/ONTRUM-3.png", className: "ontrum-logo" },
  { name: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়", logo: "/placeholder-logo.svg" },
  { name: "বাংলাদেশ কম্পিউটার কাউন্সিল", logo: "/placeholder-logo.svg" },
  { name: "আইসিটি ডিভিশন", logo: "/placeholder-logo.svg" },
  { name: "এটুআই প্রোগ্রাম", logo: "/placeholder-logo.svg" },
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের পার্টনার</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি বাংলাদেশের বিভিন্ন প্রতিষ্ঠানের সাথে কাজ করে শিক্ষার মান উন্নয়নে সহায়তা করছে।
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl flex items-center justify-center h-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            >
              <div className={`relative ${partner.name === "ONTRUM" ? "h-24 w-full scale-110" : "h-16 w-full"}`}>
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className={`${partner.name === "ONTRUM" ? "object-contain scale-125" : "object-contain"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
