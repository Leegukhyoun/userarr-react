import React, {useState} from 'react';
import Timer from './component/Timer';

const App3 = (props) => {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            <Timer />
            <button onClick={()=>{setShowTimer(!showTimer)}}>클릭하세요</button>
        </div>
    );
};

export default App3;