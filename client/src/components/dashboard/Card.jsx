import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDrag } from 'react-dnd';

const Card = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    name: 'some name',
    item: { name: 'Any custom name', type: 'Irrelevant, for now' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  const history = useHistory();
  const handleModalOpen = () => {
    history.push(`/cards/${card._id}`);
  };

  return (
    <div className="card-background" onClick={handleModalOpen} ref={drag} style={{ opacity }}>
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon" />
        <div className="cover-image" />
        <div className="card-info">
          <p>
            {card.title}
          </p>
        </div>
        <div className="card-icons" />
      </div>
    </div>
  );
};

export default Card;
