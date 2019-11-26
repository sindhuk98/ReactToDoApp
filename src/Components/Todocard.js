import React from 'react';


const ToDoCard = ({ todo }) => {
    const TODO = todo.map((e) => {
        return (
            <div class="container">
                <div class="divider">
                </div>
                    <div class="section center-align">
                        <h6>{e.title}</h6>
                        <ul>
                            {e.list.map((e) => {
                                return (
                                    <li>{e}</li>
                                );
                            })}
                        </ul>
                    </div>
            </div>
        );
    });
    return (
        TODO
    );
};

export default ToDoCard;