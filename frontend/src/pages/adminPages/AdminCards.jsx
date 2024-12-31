import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../CSS/manageCards.css'
import { Textarea, TextInput, Label, Button, Modal } from "flowbite-react";

const ManageCards = () => {
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch cards from server when component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://lando-travels-api.vercel.app/admin/getcards"
        );
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  const handleUpdateCard = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://lando-travels-api.vercel.app/admin/cards/${editingCard._id}`,
        editingCard
      );
      setCards(
        cards.map((card) =>
          card._id === editingCard._id ? response.data : card
        )
      );
      setEditingCard(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  const handleEditClick = (card) => {
    setEditingCard(card);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setEditingCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className="manage-cards-container">
      <h1 className="title">Manage Cards</h1>

      {/* Modal for editing card */}
      <Modal show={isModalOpen} onClose={handleModalClose} className="bg-black">
        <Modal.Header>Edit Card</Modal.Header>
        <Modal.Body>
          <form className="card-form" onSubmit={handleUpdateCard}>
            <div className="mb-4">
              <Label htmlFor="Enter image URL" value="Image URL" className="mb-2" />
              <TextInput
                type="text"
                placeholder="Image URL"
                value={editingCard?.src || ''}
                onChange={(e) =>
                  setEditingCard({ ...editingCard, src: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="Title" value="Enter title" className="mb-2" />
              <TextInput
                type="text"
                placeholder="Title"
                value={editingCard?.title || ''}
                onChange={(e) =>
                  setEditingCard({ ...editingCard, title: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="Description" value="Enter description" className="mb-2" />
              <Textarea
                placeholder="Description"
                value={editingCard?.description || ''}
                onChange={(e) =>
                  setEditingCard({
                    ...editingCard,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center space-x-4">
              <Button type="submit" className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <h2 className="subtitle">Existing Cards</h2>
      <div className="cards-list">
        {cards.map((card) => (
          <div key={card._id} className="card-item">
            <img src={card.src} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-buttons">
              <button
                onClick={() => handleEditClick(card)}
                className="card-button edit-button"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCards;