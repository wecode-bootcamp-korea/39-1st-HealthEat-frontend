import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cart/Cart.scss';

const MyPage = () => {
  const [myPageList, setMyPageList] = useState([
    {
      user: [{}],
      order: [{}],
      likes: [{}],
      reviews: [{}],
    },
  ]);

  // useEffect(() => {
  //   fetch("/data/kimdongki/Women.json")
  //     .then((response) => response.json())
  //     .then((result) => setMyPageList(result));
  // }, []);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const userInfo = searchParams.get("");
  // const likeList = searchParams.get("");
  // const orderList = searchParams.get("");
  //
  // useEffect(() => {
  //   fetch(``)
  //     .then((response) => response.json())
  //     .then((result) => setWomen(result));
  // }, [userInfo, likeList, orderList]);

  useEffect(() => {
    fetch('/', {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(result => setMyPageList(result));
  }, []);

  return (
    <div className="myPage">
      <div className="myPageLeft">
        <section className="myName">
          <div className="username">
            <h3>이름</h3>
            <ul>
              <li>
                <p className="txt">
                  나의 하트 <em>0</em>
                </p>
                <p className="txt">
                  나의 리뷰 <em>0</em>
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="myPoint">
          <ul>
            <li>
              <span>회원이름</span>
              <em className="userName">이름</em>
            </li>
            <li>
              <span>사용가능포인트</span>
              <em>1000000</em>
            </li>
          </ul>
        </section>
      </div>
      <div className="main">
        <div className="inserted">
          <section className="myOrder">
            <h3 className="myTit">최근 주문</h3>
            <ul className="myOrderInserted">
              <li className="myOrderTit">
                <div className="myOrderTb">
                  <div className="date">주문일</div>
                  <div className="history">주문내역</div>
                  <div className="num">주문번호</div>
                  <div className="amount">결제금액</div>
                </div>
              </li>
            </ul>
            <div className="orderListNon">
              {myPageList[0].order.length > 0 ? (
                myPageList[0].order.map((obj, index) => {
                  return <div>주문 내용</div>;
                })
              ) : (
                <p>최근 주문내역이 없습니다</p>
              )}
            </div>
            <Link to="#" className="more">
              더보기
            </Link>
          </section>
          <div className="splitWrap">
            <section className="myHeart">
              <h3 className="myTit">MY HEART</h3>
              <div className="heartWrap">
                <h4 className="heartTit">Products</h4>
                <div className="orderListNon">
                  {myPageList[0].likes.length > 0 ? (
                    myPageList[0].likes.map((obj, index) => {
                      return (
                        <div>
                          <div>좋아요</div>
                          좋아요한 상품 이름 이미지
                        </div>
                      );
                    })
                  ) : (
                    <p>상품 하트내역이 없습니다</p>
                  )}
                </div>
              </div>
              <div className="secondHeartWrap">
                <h4 className="secondHeartTit">Review</h4>
                <div className="orderListNon">
                  {myPageList[0].reviews.length > 0 ? (
                    myPageList[0].reviews.map((obj, index) => {
                      return <div>리뷰 내용</div>;
                    })
                  ) : (
                    <p>리뷰 작성내역이 없습니다</p>
                  )}
                </div>
                <ul className="heartListIn" />
              </div>
              <Link to="#" className="more">
                더보기
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
