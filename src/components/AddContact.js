import { useRef, useState } from "react"
import { addContact } from "../redux/contacts"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AddContact() {
  const [inValidInput, setInValidInput] = useState(false)
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneNoRef = useRef(null)
  const addressRef = useRef(null)
  const cityRef = useRef(null)
  const stateRef = useRef(null)
  const countryRef = useRef(null)
  const postalCodeRef = useRef(null)
  const activeStatusRef = useRef(null)
  const inactiveStatusRef = useRef(null)

  const contacts = useSelector(state => {
    return state.allContacts.contacts
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const saveContactHandler = event => {
    event.preventDefault()
    const firstName = firstNameRef.current?.value
    const lastName = lastNameRef.current?.value
    const email = emailRef.current?.value
    const phoneNo = phoneNoRef.current?.value
    const address = addressRef.current?.value
    const city = cityRef.current?.value
    const state = stateRef.current?.value
    const country = countryRef.current?.value
    const postalcode = postalCodeRef.current?.value
    const isRadioActiveChecked = activeStatusRef.current?.checked || false
    const isRadioInactiveChecked = inactiveStatusRef.current?.checked || false

    if (isRadioActiveChecked === false && isRadioInactiveChecked === false) {
      setInValidInput(true)
    }

    const status = isRadioActiveChecked ? "active" : "inactive"

    if (firstName && lastName && email && phoneNo && address && city && state && country && postalcode && status) {
      const contact = {
        firstName,
        lastName,
        email,
        phoneNo,
        address,
        city,
        state,
        country,
        postalcode,
        status,
        id: contacts.length + 1
      }
      dispatch(addContact({ contact }))

      if (firstNameRef.current) firstNameRef.current.value = ""
      if (lastNameRef.current) lastNameRef.current.value = ""
      if (emailRef.current) emailRef.current.value = ""
      if (phoneNoRef.current) phoneNoRef.current.value = ""  
      if (addressRef.current) addressRef.current.value = ""
      if (cityRef.current) cityRef.current.value = ""
      if (stateRef.current) stateRef.current.value = ""
      if (countryRef.current) countryRef.current.value = ""
      if (postalCodeRef.current) postalCodeRef.current.value = ""

      setInValidInput(false)

      navigate("/")
    } else {
      setInValidInput(true)
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow-md sm:mx-20 max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create Contact
      </h2>
      <form onSubmit={saveContactHandler}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="firstname">
            First Name:
          </label>
          <input
            ref={firstNameRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="lastname">
            Last Name:
          </label>
          <input
            ref={lastNameRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email:
          </label>
          <input
            ref={emailRef}
            className="w-full border rounded py-2 px-3"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
            Phone Number:
          </label>
          <input
            ref={phoneNoRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
            Address:
          </label>
          <input
            ref={addressRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your Address"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
           City :
          </label>
          <input
            ref={cityRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your City"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
            State:
          </label>
          <input
            ref={stateRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your State"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
            Country:
          </label>
          <input
            ref={countryRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your Country"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">
            Postal Code:
          </label>
          <input
            ref={postalCodeRef}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter your Postal Code"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block">Status:</label>
          <label className="inline-flex items-center ml-5">
            <input
              ref={activeStatusRef}
              type="radio"
              className="form-radio text-blue-500"
              name="status"
              value="active"
              defaultChecked
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center ml-5">
            <input
              ref={inactiveStatusRef}
              type="radio"
              className="form-radio text-blue-500"
              name="status"
              value="inactive"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
        {inValidInput && (
          <div className="text-red-500 text-sm mb-5">
            Error: Some or all input values are missing. Please ensure all
            fields are filled correctly.
          </div>
        )}
        <div className="flex justify-center">
          <button
            className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
            type="submit"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddContact
