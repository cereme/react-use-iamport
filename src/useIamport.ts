/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import loadScript from './utils/loader';

const JQUERY_URL = `https://code.jquery.com/jquery-1.12.4.min.js`;
const IAMPORT_URL = `https://cdn.iamport.kr/js/iamport.payment-1.1.5.js`;

interface Iamport {
  init: (identificationCode: string) => void;
  request_pay: (params: any, callback: (response: any) => void) => void;
}

interface useIamportReturns {
  loaded: boolean;
  requestPay: (params: any, onSuccess?: (resp: any) => void, onFail?: (resp: any) => void) => void;
}

export default function useIamport(iamportCode: string): useIamportReturns {
  const iamportInstance = useRef<Iamport>({} as Iamport);
  const [loaded, setLoaded] = useState(false);
  const requestPay = (params: any, onSuccess?: (resp: any) => void, onFail?: (resp: any) => void) => {
    iamportInstance.current.request_pay(params, (resp: any) => {
      if (resp.success) {
        onSuccess && onSuccess(resp);
      } else {
        onFail && onFail(resp);
      }
    });
  };

  useEffect(() => {
    (async () => {
      await loadScript(JQUERY_URL, 'react-use-iamport-jquery');
      await loadScript(IAMPORT_URL, 'react-use-iamport-iamport');
      const IMP = (window as any).IMP;
      iamportInstance.current = IMP;
      IMP.init(iamportCode);
      setLoaded(true);
    })();
  }, []);

  return { loaded, requestPay };
}
