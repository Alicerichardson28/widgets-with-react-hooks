import React from 'react';

const Accordion = ({ items }) => {
    const renderItems = items.map(item => {
        return (
            <React.Fragment key={item.title}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    return <h1 className="ui styled accordion">{renderItems}</h1>
};

export default Accordion;