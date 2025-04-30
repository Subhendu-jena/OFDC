import { verifyOrder } from "../config/controller";

declare global {
    interface Window {
      Razorpay: any;
    }
  }
  
  type RazorpayOptions = {
    key: string;
    amount: number;
    currency: string;
    image?: string;
    order_id: string;
    handler: (response: any) => void;
    prefill?: {
      name: string;
      email: string;
      contact: string;
    };
    notes?: object;
    theme?: {
      color: string;
    };
  };
  
export  const loadRazorpay = (orderData: any) => {
  const token = sessionStorage.getItem('token');
  console.log(orderData,"orderData");
    const options: RazorpayOptions = {
      key:import.meta.env.VITE_RAZORPAY_KEY, // from Razorpay Dashboardzz
      amount: orderData?.amount, // amount in paise
      currency: 'INR',
      order_id: orderData?.orderId, // order_id created in backend
      handler: (response) => {
        console.log('Payment Success:', response);
        const data = {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
        };
        verifyOrder({data :data,token:token})
        // send payment response to backend for verification
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };
  
    const razor = new window.Razorpay(options);
    razor.open();
  };
  