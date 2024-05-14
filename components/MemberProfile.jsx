import { fetchOrGenerateTokens } from '@/utils/actions'
import { UserButton } from '@clerk/nextjs'
import { currentUser, getAuth } from '@clerk/nextjs/server'
import React from 'react'

const MemberProfile = async () => {
  const user = await currentUser()
  const { userId } = getAuth()
  await fetchOrGenerateTokens(userId)

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

export default MemberProfile
