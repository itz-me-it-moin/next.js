"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "মইনুল ইসলাম",
    role: "প্রধান সদস্য, প্রফেশনাল ডেভেলপার, চিফ প্রেজেন্টর",
    image: "/placeholder.svg?height=300&width=300",
    bio: "মইনুল একজন অভিজ্ঞ সফটওয়্যার ডেভেলপার যিনি প্রগতি প্রকল্পের প্রধান উপস্থাপক এবং প্রধান ডেভেলপার হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের সামগ্রিক দিকনির্দেশনা প্রদান করেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "শুয়াইবুর রহমান",
    role: "সাব প্রেজেন্টর, গ্রাফিক্স ডিজাইনার",
    image: "/placeholder.svg?height=300&width=300",
    bio: "শুয়াইবুর একজন দক্ষ গ্রাফিক্স ডিজাইনার এবং প্রগতি প্রকল্পের সাব প্রেজেন্টর হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের ভিজ্যুয়াল আইডেনটিটি এবং ইউজার ইন্টারফেস ডিজাইন করেছেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "মোঃ তাহসিন",
    role: "সাব ডেভেলপার, প্রশাসনিক সদস্য",
    image: "/placeholder.svg?height=300&width=300",
    bio: "তাহসিন  প্রগতি প্রকল্পের সাব ডেভেলপার এবং প্রশাসনিক সদস্য হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের ব্যাকএন্ড ডেভেলপমেন্ট এবং প্রশাসনিক কাজগুলো সমন্বয় করেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "লাবিব আহসান",
    role: "গবেষণা ও ডকুমেন্টেশন বিশেষজ্ঞ",
    image: "/placeholder.svg?height=300&width=300",
    bio: "লাবিব প্রগতি প্রকল্পের গবেষণা ও ডকুমেন্টেশন বিশেষজ্ঞ হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের জন্য প্রয়োজনীয় গবেষণা এবং সমস্ত ডকুমেন্টেশন তৈরি করেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 5,
    name: "সাজিদ তালুকদার",
    role: "সাপোর্টিভ সদস্য",
    image: "/placeholder.svg?height=300&width=300",
    bio: "সাজিদ প্রগতি প্রকল্পের সাপোর্টিভ সদস্য হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের বিভিন্ন দিক সমর্থন করেন এবং টিমের অন্যান্য সদস্যদের সাহায্য করেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 6,
    name: "কাজী সাবুল ইসলাম সায়েম",
    role: "সাপোর্টিভ সদস্য",
    image: "/placeholder.svg?height=300&width=300",
    bio: "সায়েম প্রগতি প্রকল্পের সাপোর্টিভ সদস্য হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের বিভিন্ন দিক সমর্থন করেন এবং টিমের অন্যান্য সদস্যদের সাহায্য করেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 7,
    name: "সাজিদুর রহমান",
    role: "সহকারী গবেষক",
    image: "/placeholder.svg?height=300&width=300",
    bio: "সাজিদুর প্রগতি প্রকল্পের সহকারী গবেষক হিসেবে দায়িত্ব পালন করছেন। তিনি প্রকল্পের জন্য প্রয়োজনীয় গবেষণা কাজে সহায়তা করেন এবং নতুন ফিচার উন্নয়নে অবদান রাখেন।",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের টিম</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            প্রগতি প্রকল্পের পিছনে রয়েছে প্রতিভাবান এবং উদ্যমী মানুষদের একটি দল যারা শিক্ষার মান উন্নয়নে নিবেদিত।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="relative h-64 w-full bg-gradient-to-r from-blue-100 to-cyan-100">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <Link href={member.social.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={member.social.twitter} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href={member.social.github} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/team">
            <motion.button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              সম্পূর্ণ টিম দেখুন
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
