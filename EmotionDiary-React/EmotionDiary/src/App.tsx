import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

// Routes 컴포넌트 안에 Route 컴포넌트로
// Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다.
// Routes 컴포넌트 밖에 배치된 컴포넌트는 페이지 라우팅과 관련없이 모든 페이지에 동일하게 렌더링 된다.

function App() {
    return (
        <>
            <Header
                title={"Header"}
                leftChild={<Button text={"Left"}/>}
                rightChild={<Button text={"Right"}/>}
            />
            <Button
                text={"123"}
                type={"DEFAULT"}
                onClick={() => {
                console.log("123 번 버튼 클릭")
                }
            }/>

            <Button
                text={"123"}
                type={"POSITIVE"}
                onClick={() => {
                    console.log("123 번 버튼 클릭")
                }
            }/>

            <Button
                text={"123"}
                type={"NEGATIVE"}
                onClick={() => {
                    console.log("123 번 버튼 클릭")
                }
            }/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </>
    )
}

export default App
