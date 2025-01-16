"use client"

import { VenueProviderSidebar } from "./components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { useGreeting } from "../../../hooks/use-greetings"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign, Users } from 'lucide-react'

export default function VenueProviderDashboard() {
   const vendorData = { user: { name: "olive doe" } }; // Replace with actual data fetching
    const { greeting, timestamp } = useGreeting(vendorData.user.name)
  return (
    <SidebarProvider>
      <VenueProviderSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/venue">Venue Provider</BreadcrumbLink>
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
            <DashboardCard title="Total Bookings" value="87" icon={Calendar} />
            <DashboardCard title="Upcoming Events" value="12" icon={Calendar} />
            <DashboardCard title="Monthly Revenue" value="$45,678" icon={DollarSign} />
            <DashboardCard title="Total Clients" value="156" icon={Users} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add a list of upcoming events here */}
                <p>List of upcoming events goes here</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Space Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add a chart or graph showing space utilization */}
                <p>Space utilization chart goes here</p>
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

