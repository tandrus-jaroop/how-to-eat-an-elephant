import React, { FC } from "react";
import "./index.css";
/**
 * Primary UI component for user interaction
 */
export const Todo = () => {
    return (
        <div className="todo">
            <h2 className="todo__feature-title">todo list</h2>
            <div className="todo__add-item-section">
                <h3 className="todo__add-item-title">add item</h3>
                <p className="todo__add-item-input-group">
                    <input type="text" />
                    <button>add</button>
                </p>
            </div>
            <div className="todo__uncomplete-item-section">
                <h3>todo</h3>
                <ul>
                    <li>
                        <input type="checkbox" className="todo__checkbox" />
                        <input
                            type="text"
                            value="Pay Bills"
                            className="todo__list-label"
                        />
                        <div>
                            <button className="todo__edit-button">edit</button>
                            <button className="todo__delete-button">delete</button>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" className="todo__checkbox" />
                        <label className="todo__list-label">Go Shoping</label>
                        <div>
                            <button className="todo__edit-button">edit</button>
                            <button className="todo__delete-button">delete</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="todo__completed-item-section">
                <h3>Completed</h3>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            checked
                            className="todo__checkbox"
                        />
                        <label className="todo__list-label todo__list-label--completed">
                            See the Doctor
                        </label>
                        <div>
                            <button className="todo__edit-button">edit</button>
                            <button className="todo__delete-button">delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
