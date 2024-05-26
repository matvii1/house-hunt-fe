import { Container, Layout } from '@/components/common'
import { buttonVariants } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import ManagePropertiesTable from '@/pages/owner/manage-properties/ManagePropertiesTable/ManagePropertiesTable'
import RequestedPropertiesTable from '@/pages/owner/manage-properties/RequestedPropertiesTable/RequestedPropertiesTable'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { Clock, HomeIcon, PlusIcon } from 'lucide-react'
import { FC, useState } from 'react'

type ManagePropertiesProps = {}

type PropertiesTableTab = 'properties' | 'requests'

const ManageProperties: FC<ManagePropertiesProps> = () => {
  const email = useAuthContext().user?.email ?? ''
  const [activeTab, setActiveTab] = useState<PropertiesTableTab>('requests')

  function handleTabChange(tab: PropertiesTableTab) {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <Container className="mt-6">
        <div className="flex items-center justify-between">
          <Typography variant="h2" className="mb-4">
            Manage Properties
          </Typography>

          <Link
            to="/manage-properties/add-new"
            className={cn(
              buttonVariants({
                size: 'noSize',
                className: 'px-2 py-2',
                variant: 'outline'
              }),
              'border-none bg-green-600 text-white hover:bg-green-500 hover:text-white'
            )}>
            <PlusIcon className="h-4 w-4" />
            <span>Add new request</span>
          </Link>
        </div>

        <Tabs value={activeTab} className="mt-6 w-full">
          <TabsList className="relative w-full">
            <TabsTrigger
              value="properties"
              className="relative flex w-full items-center gap-2"
              onClick={() => handleTabChange('properties')}>
              <HomeIcon className="h-5 w-5" />
              Verified Properties
            </TabsTrigger>
            <TabsTrigger
              value="requests"
              className="flex w-full items-center gap-2 text-yellow-400 data-[state=active]:text-yellow-500"
              onClick={() => handleTabChange('requests')}>
              <Clock className="h-5 w-5" />
              Requests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="properties">
            <ManagePropertiesTable email={email} />
          </TabsContent>

          <TabsContent value="requests">
            <RequestedPropertiesTable email={email} />
          </TabsContent>
        </Tabs>
      </Container>
    </Layout>
  )
}

export default ManageProperties
