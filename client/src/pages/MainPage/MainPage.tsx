import Navbar from '../../containers/commons/Navbar/Navbar';
import Header from '../../containers/commons/Header';
import ContentRecommendation from '../../containers/MainPage/ContentRecommendation/ContentRecommendation';
import UserRankSlider from '../../containers/MainPage/UserRankSlider/UserRankSlider';

const MainPage = () => {
  // 헤더 로그인 기능 탑재해야함
  return (
    <div>
      <Header />
      <UserRankSlider />
      <ContentRecommendation />
      <Navbar />
    </div>
  );
};

export default MainPage;
