import { describe, expect, it } from 'vitest';
import { clinic, mapsUrl, wazeUrl, whatsappUrl } from './clinic';

describe('Clinic contact rules', () => {
  it('sends appointments to the supplied WhatsApp number', () => {
    expect(new URL(whatsappUrl()).pathname).toBe('/5593992478347');
  });
  it('prefills the exact requested appointment message', () => {
    expect(new URL(whatsappUrl()).searchParams.get('text')).toBe('Olá! Vim pelo site e gostaria de agendar uma avaliação.');
  });
  it('uses the supplied address for both navigation services', () => {
    expect(new URL(mapsUrl).searchParams.get('query')).toBe('Travessa Barjonas de Miranda, 1356, Santarém, PA');
    expect(new URL(wazeUrl).searchParams.get('q')).toBe('Travessa Barjonas de Miranda, 1356, Santarém, PA');
  });
  it('offers service Monday through Friday from 08 to 19', () => {
    expect(clinic.hours).toEqual({ weekdays: [1, 2, 3, 4, 5], opens: '08:00', closes: '19:00' });
  });
});