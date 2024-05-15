import { fetchUserTokensById } from '@/utils/actions'
import { UserProfile } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

const ProfilePage = async () => {
  const { userId } = auth()
  console.log(userId)
  const currentTokens = await fetchUserTokensById(userId)
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Chat Token Amount : {currentTokens}
      </h2>
      <UserProfile routing="hash" />
    </div>
  )
}

export default ProfilePage
