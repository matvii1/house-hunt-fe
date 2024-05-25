import { Container, Layout } from '@/components/common'
import GetInTouchForm from '@/components/common/GetInTouch/GetInTouchForm'
import { Typography } from '@/components/ui/typography'
import { useSearch } from '@tanstack/react-router'
import { FC } from 'react'

const ContactUs: FC = () => {
  const { propertyId } = useSearch({
    from: '/contact'
  })

  return (
    <Layout>
      <Container>
        <section className="relative mt-8 w-full rounded-md py-12">
          <div className="absolute inset-0 rounded-xl bg-gray-100 opacity-40"></div>
          <div className="container relative z-10 grid gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <Typography variant="h1" className="text-3xl">
                Get in Touch
              </Typography>

              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Have a question or ready to start your real estate journey?
                Contact us today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md">
              <GetInTouchForm propertyId={propertyId} />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ContactUs
