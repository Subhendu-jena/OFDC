export const film = {
  AppliCationDetails: [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],

  BillingDetails: [
    {
      name: 'billingName',
      label: 'Billing Name',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit Contact number',
      },
    },
    {
      name: 'GSTIN',
      label: 'GSTIN (If Any)',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
    {
      name: 'billingEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],

  BookingDetails: [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'date',
      required: true,
      pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: 'Please enter a valid date in YYYY-MM-DD format',
      },
    },
  ],
};

  export const cbfc = {
    ScreeningDetails: [
      {
        name: 'name',
        label: 'Name of the Film',
        type: 'text',
        required: true,
        pattern: {
          value: /^[A-Za-z0-9\s&.-]+$/,
          message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
        },
      },
      {
        name: 'language',
        label: 'Language of the Film',
        type: 'text',
        required: true,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: 'Only alphabets are allowed',
        },
      },
      // {
      //   name: 'duration',
      //   label: 'Duration of the Film',
      //   type: 'text',
      //   required: true,
      //   pattern: {
      //     value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-2][0-9]$/,
      //     message: 'Duration must be in HH:MM:SS:FF format',
      //   },
      // },
      {
        name: 'aspectRatio',
        label: 'Aspect Ratio',
        type: 'text',
        required: false,
        pattern: {
          value: /^\d+(\.\d+)?:\d+(\.\d+)?$/,
          message: 'Enter a valid aspect ratio like 16:9 or 2.39:1',
        },
      },
      {
        name: 'nameOfTheDirector',
        label: 'Name of the Director',
        type: 'text',
        required: true,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: 'Only alphabets are allowed',
        },
      },
    ],

    ProductionDetails: [
      {
        name: 'producerName',
        label: 'Name of the Producer',
        type: 'text',
        required: true,
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: 'Name should contain only letters and spaces',
        },
      },
      {
        name: 'productionHouseName',
        label: 'Name of the Production House',
        type: 'text',
        required: true,
        pattern: {
          value: /^[A-Za-z0-9\s&.-]+$/,
          message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
        },
      },
      {
        name: 'whatsappNo',
        label: 'Whatsapp No.',
        type: 'number',
        required: true,
        pattern: {
          value: /^[6-9]\d{9}$/,
          message: 'Enter a valid 10-digit WhatsApp number',
        },
      },
      {
        name: 'altContactNo',
        label: 'Alternative Contact No.',
        type: 'number',
        required: false,
        pattern: {
          value: /^[6-9]\d{9}$/,
          message: 'Enter a valid 10-digit contact number',
        },
      },
      {
        name: 'email',
        label: 'Email Id *',
        type: 'email',
        required: true,
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Enter a valid email address',
        },
      },
      {
        name: 'GST',
        label: 'GSTIN (If any)',
        type: 'text',
        required: false,
        pattern: {
          value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
          message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
        },
      },
    ],

    BookingDetails: [
      {
        name: 'bookingDate',
        label: 'Booking Date',
        type: 'Date',
        required: true,
        pattern: /^\d{4}-\d{2}-\d{2}$/,
        errorMessage: 'Please enter a valid date in YYYY-MM-DD format',
      },
    ],
  };

export const filmTradeShow = {
  AppliCationDetails: [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],
  ScreeningDetails: [
    {
      name: 'nameOfFilm',
      label: 'Name of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
      },
    },
    {
      name: 'languageOfFilm',
      label: 'Language of the Film',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    // {
    //   name: 'durationOfFilm',
    //   label: 'Duration of the Film ',
    //   type: 'text',
    //   required: true,
    //   pattern: {
    //     value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-2][0-9]$/,
    //     message: 'Duration must be in HH:MM:SS:FF format',
    //   },
    // },
    {
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      type: 'text',
      required: false,
      pattern: {
        value: /^\d+(\.\d+)?:\d+(\.\d+)?$/,
        message: 'Enter a valid aspect ratio like 16:9 or 2.39:1',
      },
    },
    {
      name: 'directorName',
      label: 'Name of the Director',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
  ],
  ProductionDetails: [
    {
      name: 'producerName',
      label: 'Name of the Producer',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'productionHouseName',
      label: 'Name of the Production House ',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z0-9\s&.-]+$/,
        message: 'Enter a valid name (letters, numbers, &, ., - allowed)',
      },
    },
    {
      name: 'productionWhatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'Alternative Contact No.',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'productionEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
    {
      name: 'productionGST',
      label: 'GSTIN (If any) ',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
  ],
  Requirements: [
    { name: 'podiumWithMic', label: 'Podium with Mic' },
    { name: 'cordlessMic', label: '2 Cordless Mic' },
    { name: 'screeningFacilities', label: 'Screening Facilities' },
  ],
  BillingDetails: [
    {
      name: 'billingName',
      label: 'Billing Name',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'billingGSTIN',
      label: 'GSTIN (If Any)',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
    {
      name: 'billingEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],

  BookingDetails: [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'Date',
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      errorMessage: 'Please enter a valid date in YYYY-MM-DD format',
    },
  ],
};

export const workShop = {
  AppliCationDetails: [
    {
      name: 'nameOfApplicant',
      label: 'Name of the Applicant',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Name should contain only letters and spaces',
      },
    },
    {
      name: 'whatsappNo',
      label: 'Whatsapp No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit WhatsApp number',
      },
    },
    {
      name: 'altContactNo',
      label: 'Alternative Contact No.',
      type: 'number',
      required: false,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit contact number',
      },
    },
    {
      name: 'email',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],
  BillingDetails: [
    {
      name: 'billingName',
      label: 'Billing Name',
      type: 'text',
      required: true,
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Only alphabets are allowed',
      },
    },
    {
      name: 'billingContactNo',
      label: 'Contact No.',
      type: 'number',
      required: true,
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Enter a valid 10-digit Contact number',
      },
    },
    {
      name: 'GSTIN',
      label: 'GSTIN (If Any)',
      type: 'text',
      required: false,
      pattern: {
        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
        message: 'Enter a valid GSTIN (e.g. 22AAAAA0000A1Z5)',
      },
    },
    {
      name: 'billingEmail',
      label: 'Email Id',
      type: 'email',
      required: true,
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
  ],
  BookingDetails: [
    {
      name: 'bookingDate',
      label: 'Booking Date',
      type: 'Date',
    },
  ],
  Requirements: [
    { name: 'podiumWithMic', label: 'Podium with Mic' },
    { name: 'cordlessMic', label: '2 Cordless Mic' },
    { name: 'screeningFacilities', label: 'Screening Facilities' },
  ],
};
