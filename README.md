# react-use-iamport

![npm version](https://img.shields.io/npm/v/react-use-iamport)

## Install

```
yarn add react-use-iamport
```

## How to use

```jsx
import useIamport from 'react-use-iamport';

function Page() {
  const [loaded, requestPay] = useIamport('impYourID');

  const impParams = {
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
  };

  return (
    <div>
      {!loaded && <p> loading useIamport </P>}
      {loaded && <button onClick={onRequestPay}>Request Pay!</button>}
    </div>
  );
}
```
