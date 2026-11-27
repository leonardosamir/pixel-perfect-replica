export const clinic = {
  phone: '5593992478347',
  address: 'Travessa Barjonas de Miranda, 1356, Santarém, PA',
  message: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
  hours: { weekdays: [1, 2, 3, 4, 5], opens: '08:00', closes: '19:00' },
};

export function whatsappUrl() {
  return `https://wa.me/${clinic.phone}?text=${encodeURIComponent(clinic.message)}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`;
export const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(clinic.address)}&navigate=yes`;