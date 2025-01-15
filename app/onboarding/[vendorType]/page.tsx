import { VendorOnboardingForm } from '@/components/onboarding/vendor-onboarding-form'

type PageProps = {
  params: {
    vendorType: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function VendorOnboardingPage({ params }: PageProps) {
  const vendorTypeMap: { [key: string]: string } = {
    'food-vendor': 'Food Vendor',
    'venue-provider': 'Venue Provider',
    'equipment-vendor': 'Equipment & Stage Vendor'
  }

  const vendorType = vendorTypeMap[params.vendorType] || 'Vendor'

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {vendorType} Onboarding
      </h1>
      <VendorOnboardingForm vendorType={vendorType} />
    </div>
  )
}

