"use client"

import React from 'react'
import { VendorSidebar } from "./components/app-sidebar"
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
import {  Calendar, DollarSign, ShoppingCart, Utensils,  Star,  } from 'lucide-react'

export default function FoodVendorDashboard() {
  const vendorData = { user: { name: "olive doe" } }; // Replace with actual data fetching
  const { greeting, timestamp } = useGreeting(vendorData.user.name)

  return (
    <SidebarProvider>
      <VendorSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Food Vendor</BreadcrumbLink>
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
            <DashboardCard title="Today's Orders" value="24" icon={ShoppingCart} />
            <DashboardCard title="Total Revenue" value="$1,234" icon={DollarSign} />
            <DashboardCard title="Upcoming Events" value="3" icon={Calendar} />
            <DashboardCard title="Menu Items" value="42" icon={Utensils} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentOrders />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Items</CardTitle>
              </CardHeader>
              <CardContent>
                <PopularItems />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <UpcomingEvents />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
              </CardHeader>
              <CardContent>
                <InventoryStatus />
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

function RecentOrders() {
  const orders = [
    { id: '1', customer: 'John Doe', items: 'Burger, Fries', total: '$15.99', status: 'Completed' },
    { id: '2', customer: 'Jane Smith', items: 'Pizza, Soda', total: '$18.50', status: 'In Progress' },
    { id: '3', customer: 'Bob Johnson', items: 'Salad, Water', total: '$9.99', status: 'Pending' },
  ]

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between border-b pb-2">
          <div>
            <p className="font-medium">{order.customer}</p>
            <p className="text-sm text-muted-foreground">{order.items}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{order.total}</p>
            <p className="text-sm text-muted-foreground">{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function PopularItems() {
  const items = [
    { name: 'Cheeseburger', sales: 150, rating: 4.8 },
    { name: 'Fries', sales: 120, rating: 4.5 },
    { name: 'Chicken Sandwich', sales: 100, rating: 4.7 },
    { name: 'Soda', sales: 200, rating: 4.2 },
  ]

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.sales} sold</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{item.rating}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function UpcomingEvents() {
  const events = [
    { name: 'Summer Food Festival', date: '2023-07-15', location: 'Central Park' },
    { name: 'Corporate Lunch Catering', date: '2023-07-20', location: 'Tech Co. HQ' },
    { name: 'Wedding Reception', date: '2023-07-25', location: 'Seaside Resort' },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.name} className="flex items-center justify-between">
          <div>
            <p className="font-medium">{event.name}</p>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function InventoryStatus() {
  const inventory = [
    { item: 'Burger Buns', quantity: 200, status: 'In Stock' },
    { item: 'Ground Beef', quantity: 50, status: 'Low Stock' },
    { item: 'Cheese Slices', quantity: 300, status: 'In Stock' },
    { item: 'Lettuce', quantity: 10, status: 'Critical' },
  ]

  return (
    <div className="space-y-4">
      {inventory.map((item) => (
        <div key={item.item} className="flex items-center justify-between">
          <div>
            <p className="font-medium">{item.item}</p>
            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
          </div>
          <div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
              item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

