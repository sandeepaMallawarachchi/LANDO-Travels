import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/manageCards.css"; // Assuming you have a CSS file for custom styles

const ManageCards = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    src: "",
    title: "",
    description: "",
  });
  const [editingCard, setEditingCard] = useState(null);

  // Fetch cards from server when component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/cards");
        setCards(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleAddCard = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/cards",
        newCard
      );
      setCards([...cards, response.data]);
      setNewCard({ src: "", title: "", description: "" });
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const handleUpdateCard = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/admin/cards/${editingCard._id}`,
        editingCard
      );
      setCards(
        cards.map((card) =>
          card._id === editingCard._id ? response.data : card
        )
      );
      setEditingCard(null);
      setNewCard({ src: "", title: "", description: "" });
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/cards/${id}`);
      setCards(cards.filter((card) => card._id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <div className="manage-cards-container">
      <h1 className="title">Manage Cards</h1>

      <form
        className="card-form"
        onSubmit={editingCard ? handleUpdateCard : handleAddCard}
      >
        <input
          type="text"
          className="form-input"
          placeholder="Image URL"
          value={editingCard ? editingCard.src : newCard.src}
          onChange={(e) =>
            editingCard
              ? setEditingCard({ ...editingCard, src: e.target.value })
              : setNewCard({ ...newCard, src: e.target.value })
          }
        />
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={editingCard ? editingCard.title : newCard.title}
          onChange={(e) =>
            editingCard
              ? setEditingCard({ ...editingCard, title: e.target.value })
              : setNewCard({ ...newCard, title: e.target.value })
          }
        />
        <textarea
          className="form-textarea"
          placeholder="Description"
          value={editingCard ? editingCard.description : newCard.description}
          onChange={(e) =>
            editingCard
              ? setEditingCard({ ...editingCard, description: e.target.value })
              : setNewCard({ ...newCard, description: e.target.value })
          }
        />
        <button type="submit" className="form-button">
          {editingCard ? "Update Card" : "Add Card"}
        </button>
      </form>

      <h2 className="subtitle">Existing Cards</h2>
      <div className="cards-list">
        {cards.map((card) => (
          <div key={card._id} className="card-item">
            <img src={card.src} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-buttons">
              <button
                onClick={() => setEditingCard(card)}
                className="card-button edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCard(card._id)}
                className="card-button delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCards;
