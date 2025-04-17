import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src="/profile.jpg" alt="프로필 사진" className="profile-img" />
      <h1 className="name">최연욱</h1>
      <p className="email">📧 chio0821@naver.com</p>
      <p style={{color : "red"}}><strong>나이:</strong> 19세</p>
      <p><strong>학력:</strong> 삼일공업고등학교 사물인터넷과</p>
      <p><strong>사는 곳:</strong> 수원시 장안구 정자3동</p>
      <p><strong>꿈:</strong> 풀스택 개발자 & ios 앱개발자</p>
    </div>
  );
}

export default App;
