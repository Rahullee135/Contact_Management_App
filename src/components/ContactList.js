import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import NoContacts from "./NoContacts";

function ContactList() {
  const contacts = useSelector((state) => {
    return state.allContacts.contacts;
  });

  const [sortBy, setSortBy] = useState("firstName"); // Default sorting by first name
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order

  const toggleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedContacts = () => {
    const sortedData = [...contacts];
    sortedData.sort((a, b) => {
      const aValue = a[sortBy].toLowerCase();
      const bValue = b[sortBy].toLowerCase();
      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
    return sortedData;
  };

  if (sortedContacts().length === 0) {
    return <NoContacts />;
  }

  return (
    <div>
      <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold ml-6 py-2 px-4 rounded inline-flex items-center whitespace-nowrap">
        <div className="w-5 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="w-6 h-6"
            fill="white"
          >
            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
          </svg>
        </div>
        <span className="ml-8" onClick={() => toggleSort("firstName")}>
          Sort
        </span>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedContacts().map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
}

export default ContactList;
