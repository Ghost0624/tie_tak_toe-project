import React from "react";
import { useState } from "react";
import './game.css'

const Game = () => {

    const [block, setBlock] = useState({})
    const [count, setCount] = useState(1)

    const handleclick = (e) => {{
        setCount(count + 1)
        setBlock((prev) =>  {
            return ({...prev, ["block" + e.target.value]: count})
        })
    }}

    return (
        <div>
            <div className="d-flex flex-row">
                {
                    !block.block1? 
                        <button onClick={handleclick} value={1}></button> :

                        block.block1 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
                {
                    !block.block2? 
                        <button onClick={handleclick} value={2}></button> :

                        block.block2 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
                {
                    !block.block3? 
                        <button onClick={handleclick} value={3}></button> :

                        block.block3 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
            
            </div>
            <div className="d-flex flex-row">
                {
                    !block.block4? 
                        <button onClick={handleclick} value={4}></button> :

                        block.block4 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
                {
                    !block.block5? 
                        <button onClick={handleclick} value={5}></button> :

                        block.block5 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
                {
                    !block.block6? 
                        <button onClick={handleclick} value={6}></button> :

                        block.block6 % 2 === 1 ?

                            <span className="blue"></span> :
                            <span className="red"></span>
                }
            
            </div>
            <div className="d-flex flex-row">
                {
                    !block.block7? 
                        <button onClick={handleclick} value={7}></button> :

                        block.block7 % 2 === 1 ?

                            <span className="blue">111111</span> :
                            <span className="red">22222</span>
                }
                {
                    !block.block8? 
                        <button onClick={handleclick} value={8}></button> :

                        block.block8 % 2 === 1 ?

                            <span className="blue">55555555</span> :
                            <span className="red"></span>
                }
                {
                    !block.block9? 
                        <button onClick={handleclick} value={9}></button> :

                        block.block9 % 2 === 1 ?

                            <span className="blue">111111111111111</span> :
                            <span className="red">2222222222222</span>
                }
            
            </div>
            <div>reset1</div>
        </div>
    )
}

export default Game;
