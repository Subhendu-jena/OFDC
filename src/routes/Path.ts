interface paths {
  home: string;
  forgotPassword: string;
  overview: string;
  twoStepVerification: string;
  dashboard: string;
  tripLog: string;
  tags: string;
  trips: string;
  profile:string;
  individualUserInfo:string;
  co2Avoided:string;
  mileSaved:string;
  totalUser:string;
  totalCreds:string;
  login:string;
  register:string;
  bookingForm:string;
}

export const paths: paths = {
  bookingForm:"/booking-form",
  login:"/",
  home: '/home',
  register:"/register",
  forgotPassword: '/forgot-password',
  overview: '/overview',
  twoStepVerification: '/two-step-verification',
  dashboard: '/dashboard',
  tripLog: '/trip-log',
  tags: '/tags',
  trips: '/trips',
  profile: "/profile",
  individualUserInfo:"/individual-user-info",
  co2Avoided:"/co2-avoided",
  mileSaved:"/mile-saved",
  totalUser:"/total-user",
  totalCreds:"/total-creds"
};
