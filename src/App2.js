import React, { useEffect, useState } from 'react';

const App2 = (props) => {
    const [ count, setCount ] = useState(1);
    const [ input, setInput ] = useState("");
    useEffect(()=>{
        console.log('렌더링 될 때마다 실행');
    })
    //useEffect에 두번째 인자로 []를 넘겨주면 마운트될 때만 호출한다
    //componentDidMount
    useEffect(()=>{
        console.log('처음 마운트될 때만 useEffect호출');
    }, [])
    useEffect(()=>{
        console.log('배열요소 안의 값이 업데이트 되면  useEffect호출');
    }, [count])
    const handleCount =  ()=>{
        setCount(count+1);
    }
    const onChange = (e) =>{
        setInput(e.target.value);
    }
    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count : {count}</span>
            <input onChange={onChange} value={input}/>
        </div>
    );
};

export default App2;