import React from 'react';

function Statistic({ tasks }) {
    const totalTasks = tasks.length
    const completed = tasks.filter(task => task.completed).length
    const uncompleted = totalTasks - completed;

    return (
        <div className="stat-block">
            <div className="stat-block__item">
                <span className="stat-block__title">All: </span>
                <span className="stat-block__number">{totalTasks}</span>
            </div>

            <div className="stat-block__item">
                <span className="stat-block__title">Completed: </span>
                <span className="stat-block__number">{completed}</span>
            </div>

            <div className="stat-block__item">
                <span className="stat-block__title">Uncompleted: </span>
                <span className="stat-block__number">{uncompleted}</span>
            </div>
            
        </div>
    );
}

export default Statistic;