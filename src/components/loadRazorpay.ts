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
  
export  const loadRazorpay = (orderData: any, onSuccess: (data: any) => void) => {
  const token = sessionStorage.getItem('token');
  console.log(orderData.orderId,"orderData");
    const options: RazorpayOptions = {
      key:import.meta.env.VITE_RAZORPAY_KEY, // from Razorpay Dashboardzz
      amount: orderData?.amount, // amount in paise
      currency: 'INR',
      order_id: orderData?.orderId, // order_id created in backend
      handler: (response) => {
        const data = {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
        };
        verifyOrder({data :data,token:token})
        .then((res:any) => {
          console.log(res, "verifyOrder response");
          onSuccess(res.payment); // ✅ Pass data to parent
        })
        .catch((err) => {
          console.error(err, "verifyOrder error");
        });
        // }if(response.razorpay_signature) {
        //  navigate('/preview', { state: { bookingDetails: response } });
        
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
  