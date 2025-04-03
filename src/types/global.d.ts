export interface FormData {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  role: string;
  termsAccepted: boolean;
}
export interface MenuItem {
  label: string;
  url: string;
}
export interface Official {
  slNo?: number;
  id?: string;
  isVacant?: boolean;
  name?: string;
  designation?: string;
  department?: string;
  contactNo?: string;
  email?: string;
  imageUrl?: string;
  status?: string;
  from?: string;
  to?: string;
  bookingType?: string;
  bookingDate?: string;
  screeningDate?: string;
  paymentMode?: string;
  paidOn?: string;
  view?: string;
  transcationStatus?: string;
  applicantName?: string;
}
interface TableProps {
  columns: Column[];
  data: Official[];
  search?: Boolean;
  maxline?: number;
}
interface Column {
  label: string;
  field: string;
}
export interface FooterLink {
  text: string;
  href: string;
}
export interface MenuItem {
  label: string;
  url: string;
  children?: MenuItem[];
}
export interface NightSkyProps {
  numShootingStars?: number;
}
export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface Section {
  title: string;
  description: string;
  locations: string[];
}
export interface CinematicLocation {
  name: string;
  description: string;
  videoUrl: string;
  video?: string;
  highlights: string[];
}
