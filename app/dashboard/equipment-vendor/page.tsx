"use client"

import { EquipmentVendorSidebar } from "./components/app-sidebar"
import { useGreeting } from "../../../hooks/use-greetings"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Calendar, DollarSign, Package } from 'lucide-react'

export default function EquipmentVendorDashboard() {
   const vendorData = { user: { name: "olive doe" } }; // Replace with actual data fetching
    const { greeting, timestamp } = useGreeting(vendorData.user.name)
  return (
    <SidebarProvider>
      <EquipmentVendorSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/equipment">Equipment Vendor</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              {greeting}
            </h1>
            <p className="text-sm text-muted-foreground">
              {timestamp}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard title="Total Inventory" value="1,234" icon={Package} />
            <DashboardCard title="Active Rentals" value="42" icon={Calendar} />
            <DashboardCard title="Monthly Revenue" value="$12,345" icon={DollarSign} />
            <DashboardCard title="Utilization Rate" value="78%" icon={BarChart} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add a list or table of recent rentals here */}
                <p>List of recent rentals goes here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add a list of upcoming maintenance tasks here */}
                <p>List of upcoming maintenance tasks goes here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function DashboardCard({ title, value, icon: Icon }: { title: string; value: string; icon: React.ElementType }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

