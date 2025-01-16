"use client"
import * as React from "react"
import { LayoutDashboard, Calendar, MapPin, Users, BarChart2, Banknote, ClipboardList, Cog, HelpCircle, Star, Utensils, LucideIcon } from 'lucide-react'
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

interface NavItemType {
  title: string
  url: string
  icon: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}


// interface NavItemType {
//   title: string
//   url: string
//   icon: React.ElementType
//   items?: {
//     title: string
//     url: string
//   }[]
// }

const venueProviderData = {
  user: {
    name: "Venue Manager",
    email: "venue@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/venue/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Bookings",
      url: "/venue/bookings",
      icon: Calendar,
      items: [
        { title: "Upcoming Events", url: "/venue/bookings/upcoming" },
        { title: "Past Events", url: "/venue/bookings/past" },
        { title: "Inquiries", url: "/venue/bookings/inquiries" },
      ],
    },
    {
      title: "Spaces",
      url: "/venue/spaces",
      icon: MapPin,
      items: [
        { title: "Manage Spaces", url: "/venue/spaces/manage" },
        { title: "Availability", url: "/venue/spaces/availability" },
        { title: "Pricing", url: "/venue/spaces/pricing" },
      ],
    },
    {
      title: "Amenities",
      url: "/venue/amenities",
      icon: Star,
      items: [
        { title: "Manage Amenities", url: "/venue/amenities/manage" },
        { title: "Add-on Services", url: "/venue/amenities/add-ons" },
      ],
    },
    {
      title: "Catering",
      url: "/venue/catering",
      icon: Utensils,
      items: [
        { title: "Menu Options", url: "/venue/catering/menus" },
        { title: "Suppliers", url: "/venue/catering/suppliers" },
      ],
    },
    {
      title: "Clients",
      url: "/venue/clients",
      icon: Users,
      items: [
        { title: "Client List", url: "/venue/clients/list" },
        { title: "Client Feedback", url: "/venue/clients/feedback" },
      ],
    },
    {
      title: "Analytics",
      url: "/venue/analytics",
      icon: BarChart2,
      items: [
        { title: "Booking Trends", url: "/venue/analytics/trends" },
        { title: "Revenue Reports", url: "/venue/analytics/revenue" },
        { title: "Space Utilization", url: "/venue/analytics/utilization" },
      ],
    },
    {
      title: "Financials",
      url: "/venue/financials",
      icon: Banknote,
      items: [
        { title: "Invoices", url: "/venue/financials/invoices" },
        { title: "Payments", url: "/venue/financials/payments" },
        { title: "Pricing Strategy", url: "/venue/financials/pricing" },
      ],
    },
    {
      title: "Maintenance",
      url: "/venue/maintenance",
      icon: ClipboardList,
      items: [
        { title: "Schedule", url: "/venue/maintenance/schedule" },
        { title: "Issues Log", url: "/venue/maintenance/issues" },
      ],
    },
    {
      title: "Settings",
      url: "/venue/settings",
      icon: Cog,
      items: [
        { title: "Venue Profile", url: "/venue/settings/profile" },
        { title: "Booking Policies", url: "/venue/settings/policies" },
        { title: "Team Management", url: "/venue/settings/team" },
      ],
    },
    {
      title: "Help & Support",
      url: "/venue/support",
      icon: HelpCircle,
    },
  ] as NavItemType[],
}

export function VenueProviderSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="bg-white text-black" {...props}>
      <SidebarHeader>
        <div className="p-4 group-data-[collapsible=icon]:hidden">
          <h2 className="text-lg font-semibold">Venue Provider</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={venueProviderData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={venueProviderData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

