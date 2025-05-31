/**
 * Opens a WhatsApp chat with the specified phone number and pre-filled message
 * @param phoneNumber - The phone number to chat with (without + sign)
 * @param message - Optional pre-filled message
 */
export function openWhatsAppChat(phoneNumber: string, message = "") {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}
