import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.tsx";
import New from "./pages/New.tsx";
import Diary from "./pages/Diary.tsx";
import Notfound from "./pages/Notfound.tsx";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// Routes 컴포넌트 안에 Route 컴포넌트로
// Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
function App() {
  return (
      <div>
        <div className="text-3xl font-bold text-purple-600">Hello</div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/diary" element={<Diary/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
)
}
// Routes 컴포넌트 밖에 배치된 컴포넌트는 페이지 라우팅과 관련없이 모든 페이지에 동일하게 렌더링 된다.

export default App
