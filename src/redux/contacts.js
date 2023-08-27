import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
  {
    firstName: "Zack ",
    lastName: "Snyder",
    email: "Zacksynder@gmail.com",
    phoneNo: "+13236451000",
    address: "N Larchmont Blvd",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    postalcode: "90003",
    status: "active",
    id: 6,
  },
  {
    firstName: "James ",
    lastName: "Cameron",
    email: "jamescameron@gmail.com",
    phoneNo: "+9414261812",
    address: "Lincoln Street",
    city: "Boston",
    state: "california",
    country: "United States",
    postalcode: "90004",
    status: "inactive",
    id: 5,
  },
  {
    firstName: "Christopher ",
    lastName: "Nolan",
    email: "Christophernolan@gmail.com",
    phoneNo: " +13102859000",
    address: "Hidden Hills",
    city: " Los Angeles",
    state: "California ",
    country: "United States",
    postalcode: "90001",
    status: "active",
    id: 4,
  },
  {
    firstName: "Akaza",
    lastName: "Hakuji",
    email: "akaza@gmail.com",
    phoneNo: "+81198521994",
    address: "Iwamikamae",
    city: "Taishi-cho Ibo-gun",
    state: "Hyogo",
    country: "Japan",
    postalcode: "5008001",
    status: "inactive",
    id: 3,
  },
  {
    firstName: "Tanjiro",
    lastName: "kamoda",
    email: "tangiro@gmail.com",
    phoneNo: " +81733748079",
    address: "Miyukimachi",
    city: "Tajimi-shi",
    state: " Gifu",
    country: "Japan",
    postalcode: "5008004",
    status: "active",
    id: 2,
  },
  {
    firstName: "Rahul",
    lastName: "Prasad",
    email: "rahul@gmail.com",
    phoneNo: "+918124013397",
    address: "priya nagar",
    city: "chennai",
    state: "tamil nadu",
    country: "india",
    postalcode: "641039",
    status: "active",
    id: 1,
  },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [
      ...initialContacts,
      ...(JSON.parse(localStorage.getItem("contacts")) || []),
    ],
    status: "idle",
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      const newContacts = [action.payload.contact, ...state.contacts];
      state.contacts = newContacts;
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    deleteContact: (state, action) => {
      const newContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      state.contacts = newContacts;
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    },
    updateContact: (state, action) => {
      const updatedIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        state.contacts[updatedIndex] = action.payload.updatedContact;
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      }
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;
