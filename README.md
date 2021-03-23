# react-use-iamport

## Install

not published yet

## How to use
```jsx
  import useIamport from 'react-use-iamport'

  function Page(){
    const [loaded, requestPay] = useIamport('impYourID');

    const impParams =  {
      pg: 'kcp',
      pay_method: 'card',
      merchant_uid: 'test',
      name: 'test order title',
      amount: 3900,
      buyer_email: 'ceremebsy@gmail.com',
      buyer_name: 'cereme',
    };
    
    const onRequestPay = () => {
      requestPay(impParams, console.log, console.log);
    }

    return (
      <div>
      { !loaded &&
        <p> loading useIamport </P>
      }
      { loaded &&
        <button onClick={onRequestPay}>
          Request Pay!
        </button>
      }
      </div>
    )
  }
```
