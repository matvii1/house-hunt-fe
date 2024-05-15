/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8KQ90AxfI5Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import AdTypeFilter from '@/pages/properties/components/PropertiesFilters/components/AdTypeFilter/AdTypeFilter'
import AvailableFromFilter from '@/pages/properties/components/PropertiesFilters/components/AvailableFromFilter/AvailableFromFilter'
import IsFurnishedFilter from '@/pages/properties/components/PropertiesFilters/components/IsFurnishedFilter/IsFurnishedFilter'
import PriceSlider from '@/pages/properties/components/PropertiesFilters/components/PriceSlider/PriceSlider'
import PropertyTypeFiler from '@/pages/properties/components/PropertiesFilters/components/PropertyTypeFiler/PropertyTypeFiler'
import RoomsRangeFilter from '@/pages/properties/components/PropertiesFilters/components/RoomsRangeFilter/RoomsRangeFilter'
import { FC } from 'react'

export const MIN_PRICE = 0
export const MAX_PRICE = 6_000_000

type PropertiesFiltersProps = {
  applyFilters: () => void
  handleCloseDrawer?: () => void
  isFetching?: boolean
}

const PropertiesFilters: FC<PropertiesFiltersProps> = ({
  applyFilters,
  handleCloseDrawer,
  isFetching = false
}) => {
  return (
    <div className="">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>
      <div className="flex flex-col gap-2">
        <AdTypeFilter />

        <PriceSlider />
        <IsFurnishedFilter />

        <AvailableFromFilter />

        <RoomsRangeFilter />

        <PropertyTypeFiler />

        <Button
          className="mt-4 w-full"
          loading={isFetching}
          onClick={() => {
            applyFilters()
            handleCloseDrawer()
          }}>
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

export default PropertiesFilters
