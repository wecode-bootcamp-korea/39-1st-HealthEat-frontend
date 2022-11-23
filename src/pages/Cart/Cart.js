import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cart/Cart.scss';
import CartItem from './CartItem.js';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState();
  const setPaymentItem = () => {
    const paymentItem = cartItemList.filter(obj => {
      return obj.isCheck === true;
    });
    localStorage.setItem('orderList', JSON.stringify(paymentItem));
    return paymentItem;
  };

  useEffect(() => {
    // // mock data fetch
    // fetch("/data/shimdongseup/cartData.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // isCheck 항목 추가해서 리스트 저장
    //     const newCartList = data.map((obj) => {
    //       return { ...obj, isCheck: true };
    //     });
    //     setCartItemList(newCartList);
    //   });

    //backend API fetch
    fetch('http://10.58.52.241:3000/cart', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(data => {
        // isCheck 항목 추가해서 리스트 저장
        // console.log(data.baskets);
        // const arr = [...data.baskets];
        const newCartList = data.baskets.map(obj => {
          return { ...obj, isCheck: true };
        });
        setCartItemList(newCartList);
      });
  }, []);

  // 총 주문 수량 계산
  const calTotalAmount = arr => {
    if (arr) {
      let totalAmount = 0;
      arr.forEach(obj => {
        if (obj.isCheck) {
          totalAmount += obj.amount;
        }
      });
      return totalAmount;
    }
  };
  // 총 주문 가격 계산
  const calTotalPrice = arr => {
    if (arr) {
      let priceTotal = 0;
      arr.forEach(obj => {
        if (obj.isCheck) {
          priceTotal += obj.amount * obj.productPrice;
        }
      });
      return priceTotal;
    }
  };

  // console.log(cartItemList);
  const totalAmount = calTotalAmount(cartItemList);
  const totalPrice = calTotalPrice(cartItemList);

  return (
    <div className="wrapCart">
      <div className="orderStep">
        <span>01 SHOPPING BAG</span>
        <span>02 ORDER</span>
        <span>03 ORDER CONFIRMED</span>
      </div>

      <div className="itemList">
        <div className="columnName">
          <div className="itemInfoCol">상품 정보</div>
          <div className="quantityCol">수량</div>
          <div className="orderPriceCol">주문금액</div>
          <div className="deliveryChargeCol">배송비</div>
        </div>
        {cartItemList &&
          cartItemList.map((obj, index) => (
            <CartItem
              itemInfo={obj}
              key={index}
              setCartItemList={setCartItemList}
              cartItemList={cartItemList}
              index={index}
              deleteItem={function deleteComment() {
                // // 백엔드 연결전 코드
                // const deletedItem = [...cartItemList];
                // deletedItem.splice(index, 1);
                // setCartItemList(deletedItem);
                //백앤드 연결시 아래코드로 대체
                fetch('http://10.58.52.241:3000/cart', {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    authorization: localStorage.getItem('TOKEN'),
                  },
                  body: JSON.stringify({
                    basketIds: [obj.basketId],
                  }),
                })
                  .then(response => {
                    if (response.status !== 204) {
                      throw new Error('error');
                    } else {
                      //fetch 성공시
                      const deletedItem = [...cartItemList];
                      deletedItem.splice(index, 1);
                      setCartItemList(deletedItem);
                    }
                  })
                  .catch(error => {
                    alert('장바구니 삭제에 실패하였습니다.');
                  });
              }}
            />
          ))}
        <div className="itemListFooter">
          {/* <button>선택상품 삭제</button> */}
          <span>장바구니는 접속 종료 후 60일 동안 보관됩니다.</span>
        </div>
      </div>
      <div className="calculator">
        <div className="columnName">
          <div>총 주문금액</div>
          <div>총 배송비</div>
          <div>총 결제금액</div>
        </div>
        <div className="calculation">
          <div className="totalPrice">
            <div className="price">
              {totalPrice?.toLocaleString()}
              <h3>원</h3>
            </div>
            <span>총 {totalAmount}개</span>
          </div>
          <div className="wrapIcon">
            <div className="material-icons icon">add_circle</div>
          </div>
          <div className="totalPrice">
            <div className="price">
              0<h3>원</h3>
            </div>
          </div>
          <div className="wrapIcon">
            <div className="material-icons icon">pause_circle_filled</div>
          </div>
          <div className="totalPrice">
            <div className="price">
              {totalPrice?.toLocaleString()}
              <h3>원</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomButton">
        <Link className="continueShopping" to="#">
          CONTINUE SHOPPING
        </Link>
        <Link onClick={setPaymentItem} className="checkout" to="/Payment">
          CHECK OUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;
