"use client"

import * as React from "react"
import { LayoutDashboard, Package, Calendar, PenToolIcon as Tool, Truck, Users, BarChart2, Banknote, ClipboardList, Cog, HelpCircle } from 'lucide-react'
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// interface NavItemType {
//   title: string
//   url: string
//   icon: React.ElementType
//   items?: {
//     title: string
//     url: string
//   }[]
// }
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

const equipmentVendorData = {
  user: {
    name: "Equipment Manager",
    email: "equipment@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/equipment/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Inventory",
      url: "/equipment/inventory",
      icon: Package,
      items: [
        { title: "Equipment List", url: "/equipment/inventory/list" },
        { title: "Categories", url: "/equipment/inventory/categories" },
        { title: "Stock Levels", url: "/equipment/inventory/stock" },
      ],
    },
    {
      title: "Rentals",
      url: "/equipment/rentals",
      icon: Calendar,
      items: [
        { title: "Upcoming Rentals", url: "/equipment/rentals/upcoming" },
        { title: "Past Rentals", url: "/equipment/rentals/past" },
        { title: "Rental Requests", url: "/equipment/rentals/requests" },
      ],
    },
    {
      title: "Maintenance",
      url: "/equipment/maintenance",
      icon: Tool,
      items: [
        { title: "Maintenance Schedule", url: "/equipment/maintenance/schedule" },
        { title: "Repair Log", url: "/equipment/maintenance/repairs" },
        { title: "Equipment Health", url: "/equipment/maintenance/health" },
      ],
    },
    {
      title: "Logistics",
      url: "/equipment/logistics",
      icon: Truck,
      items: [
        { title: "Delivery Schedule", url: "/equipment/logistics/deliveries" },
        { title: "Pickup Schedule", url: "/equipment/logistics/pickups" },
        { title: "Route Planning", url: "/equipment/logistics/routes" },
      ],
    },
    {
      title: "Clients",
      url: "/equipment/clients",
      icon: Users,
      items: [
        { title: "Client List", url: "/equipment/clients/list" },
        { title: "Client Feedback", url: "/equipment/clients/feedback" },
      ],
    },
    {
      title: "Analytics",
      url: "/equipment/analytics",
      icon: BarChart2,
      items: [
        { title: "Rental Trends", url: "/equipment/analytics/trends" },
        { title: "Equipment Utilization", url: "/equipment/analytics/utilization" },
        { title: "Revenue Reports", url: "/equipment/analytics/revenue" },
      ],
    },
    {
      title: "Financials",
      url: "/equipment/financials",
      icon: Banknote,
      items: [
        { title: "Invoices", url: "/equipment/financials/invoices" },
        { title: "Payments", url: "/equipment/financials/payments" },
        { title: "Pricing Strategy", url: "/equipment/financials/pricing" },
      ],
    },
    {
      title: "Quality Control",
      url: "/equipment/quality",
      icon: ClipboardList,
      items: [
        { title: "Inspection Reports", url: "/equipment/quality/inspections" },
        { title: "Equipment Standards", url: "/equipment/quality/standards" },
      ],
    },
    {
      title: "Settings",
      url: "/equipment/settings",
      icon: Cog,
      items: [
        { title: "Company Profile", url: "/equipment/settings/profile" },
        { title: "Rental Policies", url: "/equipment/settings/policies" },
        { title: "Team Management", url: "/equipment/settings/team" },
      ],
    },
    {
      title: "Help & Support",
      url: "/equipment/support",
      icon: HelpCircle,
    },
  ] as NavItemType[],
}

export function EquipmentVendorSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="bg-white text-black" {...props}>
      <SidebarHeader>
        <div className="p-4 group-data-[collapsible=icon]:hidden">
          <h2 className="text-lg font-semibold">Equipment Vendor</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={equipmentVendorData.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={equipmentVendorData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

