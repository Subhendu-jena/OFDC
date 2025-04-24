export interface FormData {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
  confirmPassword: string;
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
  contact?: string;
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
  action?: boolean;
  url?: string;
}
interface TableProps {
  columns: Column[];
  data: any;
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

export interface ErrorResponse<T> {
  success: false;
  message: string;
  data?: T;
}
export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}
export interface DeleteApiCallerProps {
  uri: string;
  token?: string | number;
}
export interface signUpResponse {
  user: {
    name: string;
    email: string;
    phoneNo: string;
    _id: string;
  };
  token: string;
}
export interface signupData {
  name: string;
  email: string;
  password: string;
  phoneNo: string;
}
export interface IUser {
  name: string;
  email: string;
  phoneNo: string;
  profilePhoto?: string;
  // _id: string;
}

export interface loginResponse {
    name: string;
    email: string;
    phoneNo: string;
    _id: string;
    token?: string;
}
export interface loginData {
  identifier: string;
  password: string;
  rememberMe: boolean;
}
export interface director {
  url?: string;
  id: number;
  position: string;
  name: string;
  imageUrl: string;
  isVacant?: boolean;
}

export interface contactUsData {
  name: string;
  email: string;
  message: string;}