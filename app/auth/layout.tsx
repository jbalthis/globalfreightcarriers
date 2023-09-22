import React from 'react'
import AuthContext from '@/providers/auth-context-provider'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children
}) => {
  return (
    <AuthContext>
      {children}
    </AuthContext>
  )
}

export default AuthLayout
