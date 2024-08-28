import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "flowbite-react";

const Inbox = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/contacts")
      .then((response) => {
        setEmails(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the emails!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/admin/contacts/${id}`)
      .then((response) => {
        setEmails(emails.filter((email) => email._id !== id));
        setSelectedEmail(null);
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error deleting the email!", error);
      });
  };

  const handleEmailClick = (email) => {
    // Mark the email as read on the server
    axios
      .patch(`http://localhost:4000/admin/contacts/${email._id}`, {
        read: true,
      })
      .then((response) => {
        // Update the state with the new email data
        setEmails(
          emails.map((e) => (e._id === email._id ? { ...e, read: true } : e))
        );
        setSelectedEmail(email);
      })
      .catch((error) => {
        console.error("There was an error updating the read status!", error);
      });
  };

  const handleReply = () => {
    if (selectedEmail) {
      const recipientEmail = selectedEmail.email;
      const subject = `Replying to: ${selectedEmail.subject}`;

      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        subject
      )}`;

      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Inbox</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {emails.map((email, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 cursor-pointer ${
              email.read ? "bg-white" : "bg-green-100"
            }`}
            onClick={() => handleEmailClick(email)}
          >
            <div
              className={`p-4 hover:bg-gray-100 ${
                email.read ? "text-black-500" : "font-semibold"
              }`}
            >
              <p className="font-semibold">{email.subject}</p>
              <p className="text-sm text-gray-500">{email.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal for Email Content */}
      {selectedEmail && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              className="float-right text-gray-600"
              onClick={() => setSelectedEmail(null)}
            >
              Close
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedEmail.subject}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedEmail.email}</p>
            <p>{selectedEmail.message}</p>
            <div className="flex mt-5 gap-4">
              <Button
                className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-700"
                onClick={handleReply}
              >
                Reply
              </Button>
              <Button
                className="text-sm px-2 py-1 sm:px-4 sm:py-2 bg-red-500 hover:bg-red-700"
                onClick={() => handleDelete(selectedEmail._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
