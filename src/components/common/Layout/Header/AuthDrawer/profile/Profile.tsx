import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Typography } from '@/components/ui/typography'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { Check, CornerUpLeft, LogOut, UserIcon } from 'lucide-react'
import { FC } from 'react'

type ProfileProps = {
  handleClose: () => void
}

const Profile: FC<ProfileProps> = ({ handleClose }) => {
  const auth = useAuthContext()
  const isOwner = auth?.user?.type === 'LANDLORD'

  function handleLogout() {
    auth.logout()
  }

  return (
    <div className="mt-4 flex w-full flex-1 flex-col justify-between gap-4">
      <div>
        <div className="flex items-start gap-4">
          <div className="rounded-full border p-2">
            <UserIcon className="h-5 w-5" />
          </div>

          <div>
            <p>{auth?.user?.email}</p>

            <div className="flex items-center gap-2">
              <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-green-500 text-green-500">
                <Check className="h-[11px] w-[11px]" />
              </div>
              <p className="text-sm">Verified</p>
            </div>
          </div>
        </div>

        <Button
          className="mt-6 h-12 w-full border"
          variant="ghost"
          asChild
          onClick={handleClose}>
          <Link to="/properties" className="flex items-center gap-2">
            <CornerUpLeft />
            View properties
          </Link>
        </Button>

        <div className="py-3"></div>

        {isOwner && (
          <>
            <Separator className="mb-4" />

            <div>
              <Typography variant="h3" className="font-normal">
                For the owner
              </Typography>

              <ul className="ml-6 mt-2 flex list-disc flex-col gap-1">
                <li>
                  <Link to="/manage-properties">Manage properties</Link>
                </li>
              </ul>
            </div>
            <div className="py-2"></div>
          </>
        )}

        <div>
          <Typography variant="h3" className="font-normal">
            For seekers
          </Typography>

          <ul className="ml-6 mt-2 flex list-disc flex-col gap-1">
            <li>
              <Link to="/">Ads</Link>
            </li>
          </ul>
        </div>

        <Separator className="my-4" />

        <div>
          <Typography variant="h3" className="font-normal">
            Settings
          </Typography>

          <ul className="ml-6 mt-2 flex list-disc flex-col gap-1">
            <li>
              <Link to="/">Wallet</Link>
            </li>
            <li>
              <Link to="/">Login and security</Link>
            </li>
            <li>
              <Link to="/">Personal data</Link>
            </li>
            <li>
              <Link to="/settings/account">Profile</Link>
            </li>
          </ul>
        </div>
      </div>

      <Button onClick={handleLogout} className="gap-2">
        <LogOut className="rotate-180" />
        Log out
      </Button>
    </div>
  )
}

export default Profile
