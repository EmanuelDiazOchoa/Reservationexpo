 export type Sport = 'futbol' | 'tenis' | 'padel' | 'basquet';
 export interface Venue {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  photos: string[];     // URLs o require(...)
  rating?: number;
 }
 export interface Court {
  id: string;
  venueId: string;
  sport: Sport;
  name: string;
  pricePerHour: number;
  surface?: string;     // 'sintético', 'cemento', 'madera'
  availableSlots: string[]; // '2025-09-05T18:00:00-03:00'
 }
 export interface Booking {
  id: string;
  courtId: string;
  venueId: string;
  userName: string;
  dateISO: string;      // fecha/hora ISO
  durationHours: number;
  totalPrice: number;
  notes?: string;
 }