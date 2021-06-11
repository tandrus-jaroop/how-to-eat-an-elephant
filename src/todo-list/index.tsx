import React, { FC } from "react";
import "./index.css";
/**
 * Primary UI component for user interaction
 */
export const Todo = () => {
    return (
        <div>
            <h2>todo list</h2>
            <div>
                <h3>add item</h3>
                <input />
                <button>add</button>
            </div>
            <div>
                <h3>todo</h3>
                <ul>
                    <li>
                        <input type="checkbox" />
                        <input type="text" value="Pay Bills" />
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <p>Go Shoping</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <input type="checkbox" checked />
                        <p>Go Shoping</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
