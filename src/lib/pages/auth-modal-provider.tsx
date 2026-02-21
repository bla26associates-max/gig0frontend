// src/components/auth-modal-provider.tsx

"use client"

import React, { createContext, useContext, useState, useCallback } from "react"
import { AuthMode, UserRole, AuthModalOptions } from "@/lib/types"

interface AuthModalContextType {
  isOpen: boolean
  mode: AuthMode
  viewContext: UserRole
  openAuthModal: (options: AuthModalOptions) => void
  closeAuthModal: () => void
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined)

/**
 * AuthModalProvider: The "Logic Controller" for Philadelphia StaffHub.
 * Orchestrates the Four-State authentication flow across the platform.
 */
export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthMode>("signin")
  const [viewContext, setViewContext] = useState<UserRole>("public")

  const openAuthModal = useCallback(({ mode, viewContext }: AuthModalOptions) => {
    setMode(mode)
    setViewContext(viewContext)
    setIsOpen(true)
    
    // Console Debugging (Internal Test)
    console.log(`[AuthSystem] UI Pivot: ${mode.toUpperCase()} as ${viewContext.toUpperCase()}`)
  }, [])

  const closeAuthModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <AuthModalContext.Provider 
      value={{ 
        isOpen, 
        mode, 
        viewContext, 
        openAuthModal, 
        closeAuthModal 
      }}
    >
      {children}
      {/* The AuthModal component will be placed here in the next step.
          It will consume the isOpen, mode, and viewContext states to 
          render the correct Zod-validated forms.
      */}
    </AuthModalContext.Provider>
  )
}

/**
 * useAuthModal: The primary hook for Header and Hero components.
 */
export function useAuthModal() {
  const context = useContext(AuthModalContext)
  if (context === undefined) {
    throw new Error("useAuthModal must be used within an AuthModalProvider")
  }
  return context
}