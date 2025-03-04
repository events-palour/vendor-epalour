import React from 'react'
import GetStartedPage from "./get-started/page"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: " Vendor | Get Started",
  description: "Join the Vendors Network and enjoy the Events Palour services",
};



function page() {
  return (
    <div>
      <GetStartedPage />

    </div>
  )
}
export default page