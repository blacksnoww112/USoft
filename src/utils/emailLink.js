/**
 * Utility to provide smart email link handling:
 * - On desktop: opens Gmail compose window in a new tab.
 * - On mobile: opens default mail client via mailto: protocol.
 */
export const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const getEmailLink = (email) => {
  if (isMobileDevice()) {
    return `mailto:${email}`
  }
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
}

export const getEmailTarget = () => {
  return isMobileDevice() ? undefined : '_blank'
}

