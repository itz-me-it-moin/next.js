"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LanguageMartysTribute() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64 md:h-96 w-full">
              <Image src="/shaheed-minar.png" alt="শহীদ মিনার" fill className="object-contain" priority />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bloody-text">ভাষা শহীদদের প্রতি শ্রদ্ধাঞ্জলি</h2>

            <p className="text-xl mb-6 bloody-text">
              প্রগতি টিমের পক্ষ থেকে সকল ভাষা শহীদদের জানাই সম্মান ও শ্রদ্ধা। আমাদের মাতৃভাষার জন্য যাঁরা প্রাণ দিয়েছেন, তাঁদের আত্মত্যাগ চিরকাল
              স্মরণীয় থাকবে।
            </p>

            <p className="text-lg bloody-text">ভাষা শহীদদের সম্মানে আমাদের এআই সম্পূর্ণ বাংলা ভাষায় কথা বলতে পারে।</p>

            <div className="mt-8">
              <motion.button
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                আরও জানুন
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
