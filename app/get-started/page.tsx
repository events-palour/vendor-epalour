'use client'

import Link from 'next/link'
import { ArrowRight, Utensils, Building, Mic } from 'lucide-react'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"

export default function GetStartedPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <main className="flex-grow container mx-auto px-4 py-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Join Our Event Vendor Network
                </motion.h1>
                <motion.p
                    className="text-xl text-center mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Select your vendor type to start offering your services for exciting events and create unforgettable experiences.
                </motion.p>

                <motion.div
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <VendorCard
                        title="Food Vendor"
                        description="Showcase your culinary creations at events. Apply to sell your food and beverages to event attendees."
                        icon={<Utensils className="w-12 h-12 mb-4" />}
                        href="/onboarding/food-vendor"
                        buttonText="Join as Food Vendor"
                    />
                    <VendorCard
                        title="Venue Provider"
                        description="List your venue for events. Offer unique spaces for organizers to host memorable gatherings."
                        icon={<Building className="w-12 h-12 mb-4" />}
                        href="/onboarding/venue-provider"
                        buttonText="Register Your Venue"
                    />
                    <VendorCard
                        title="Equipment & Stage Vendor"
                        description="Provide sound systems, lighting, stages, and more. Help create the perfect atmosphere for events."
                        icon={<Mic className="w-12 h-12 mb-4" />}
                        href="/onboarding/equipment-vendor"
                        buttonText="Offer Your Equipment"
                    />
                </motion.div>
            </main>
        </div>
    )
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
}

function VendorCard({ title, description, icon, href, buttonText }: {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    buttonText: string
}) {
    return (
        <motion.div
            className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center group"
            variants={itemVariants}
        >
            {icon}
            <motion.h2 className="text-2xl font-semibold mb-4">{title}</motion.h2>
            <motion.p className="mb-6 flex-grow">{description}</motion.p>
            <Link href={href} passHref>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </Link>
        </motion.div>
    )
}

