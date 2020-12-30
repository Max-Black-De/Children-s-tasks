import React, { useState } from 'react';
import TodoItem from "./TodoItem";
import "./main_page.css";

function MainPage () {

const [input, setInput] = useState("");
const [items, setItems] = useState([]);

function removeItem(id) {
    setItems(prevData => {
        return prevData.filter((item, index) => {
            return index !== id;
        })
    });
}

function addItem(event) {
    setItems(prevData => {
        return [...prevData, input];
    });
    
    setInput("");
    }

    // state = {
    //     classMon: 'mon day',
    //     style: ""
    // };
    
    

    // changeClassHandle=() => {
    //     if(this.state.classMOn == 'mon day' ){
    //     this.setState({
    //         classMon: 'opened'
    //     });

    //     if(this.state.style === ""){
    //         this.setState({
    //             style: "line-throw"
    //         })
    //     }
    // }
    // };
    return (
        <div className="main">
        <div className="background"
        >
            <div className='mon day opened'
                // onClick={this.changeClassHandle}
            >
                <p>Monday</p>
                <button
                class="add"
                onClick={addItem}
                >Add
                </button>
                <div className='container-of-input'>
                <input
                type="text"
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
                ></input>
                {/* <button onClick={this.changeClassHandle}
                        className='done'
                ></button> */}
                </div>
                <div className="items">
                    <ul>
                        {items.map((item, index) => (
                            <TodoItem
                            key={index}
                            id={index}
                            item={item}
                            onCheck={removeItem}
                            />
                        ))}
                    </ul>
                </div>
            </div>


            <div className="tues day opened hiden">
                <p>Tuesday</p>
            </div>
            <div className="wednes day opened hiden">
                <p>Wednesday</p>
            </div>
            <div className="thus day opened hiden">
                <p>Thusday</p>
            </div>
            <div className="fri day opened hiden">
                <p>Friday</p>
            </div>
            <div className="satur day opened hiden">
                <p>Saturday</p>
            </div>
            <div className="sun day opened hiden">
                <p>Sunday</p>
            </div>
        </div>
        </div>
    );
}

export default MainPage;