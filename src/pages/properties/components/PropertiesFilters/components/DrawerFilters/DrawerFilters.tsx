import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import PropertiesFilters from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { FilterIcon } from 'lucide-react'
import { FC } from 'react'

type DrawerFiltersProps = {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
  applyFilters: () => void
}

const DrawerFilters: FC<DrawerFiltersProps> = ({
  drawerOpen,
  setDrawerOpen,
  applyFilters
}) => {
  const handleCloseDrawer = () => setDrawerOpen(false)

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <FilterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <PropertiesFilters
            applyFilters={applyFilters}
            handleCloseDrawer={handleCloseDrawer}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerFilters
