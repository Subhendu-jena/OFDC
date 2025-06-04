import { ApiResponse, strapiCaller } from './httpClient';

export const contact = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/contactss?populate=*`,
  });
};
export const getAllBoardofDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/board-of-directors?populate[boardOfDirectors][populate]=*`,
  });
};
export const getAllFormerChairpersons = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-chairpersons?populate[formerChairpersons][populate]=*`,
  });
};
export const getAllManagingDirectors = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/former-managing-directors?populate[formerManagingDirectors][populate]=*`,
  });
};
export const herosection = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/hero-sections?populate=*`,
  });
};
export const leaderships = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/leaderships?populate[mainDescription]=*&populate[managingDirector][populate]=imageUrl&populate[chairman][populate]=imageUrl&populate[independentDirector][populate]=imageUrl&populate[nomineeDirectors][populate]=imageUrl`,
  });
};
export const latestNews = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/latest-newss`,
  });
};
export const odishaStories = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/odisha-stories?populate=*`,
  });
};
export const locationDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/location-directories?populate[locationsCard][populate]=*`,
  });
};
export const talentDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/talent-directories?populate[talentDirectory][populate]=*`,
  });
};
export const equipmentDirectory = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/equipment-directories?populate[equipmentDirectory][populate]=image`,
  });
};
export const testimonialsApi = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/testimonialss?populate[testimonials][populate]=image`,
  });
};
export const messageCM = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/cm-block?populate[cm][populate]=image`,
  });
};

export const aCursoryLook = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/about-us-a-cursory-looks?populate=*`,
  });
};
export const whoIsWhoAboutUS = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/who-is-who-about-uses?populate[whoIsWho][populate]=*`,
  });
};
export const whoIsWhoKalingaStudio = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/who-is-who-kalinga-studios?populate[whoIsWho][populate]=*`,
  });
};

export const ourVisionandMission = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/about-us-our-mission-and-visions?populate=*`,
  });
};

export const achivements = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/about-us-achivements?populate=*`,
  });
};
export const filmPolicy = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/film-eco-system-film-policies?populate[objectives][populate]=*&populate[support][populate]=*&populate[incentives][populate]=*&populate[headImage][populate]=*&populate[filmPolicy][populate]=*&populate[filmPolicyDocs][populate]=*`,
  });
};
export const operationGuidelines = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/film-eco-system-operational-guidlines?populate=*`,
  });
};
export const publications = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/quick-links-publications?populate[publication][populate]=*`,
  });
};
export const tenders = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/quick-links-tenders?populate[publication][populate]=*`,
  });
};
export const majorFestivals = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/discover-odisha-major-festivals?populate[majorFestival][populate]=*`,
  });
};
export const filmGallery = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/odia-film-archive-film-archives?populate[filmArchive][populate]=*`,
  });
};
export const archivalGallery = async (): Promise<ApiResponse<[]>> => {
  return strapiCaller({
    uri: `/api/odia-film-archive-archival-galleries?populate[archivalGallery][populate]=*`,
  });
};
