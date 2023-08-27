import EditContact from "../components/EditContact"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function EditContactPage() {
  const { id } = useParams()
  let intId = null

  if (id) {
    intId = parseInt(id, 10)
  }

  const contacts = useSelector(state => state.allContacts.contacts)

  const contact =
    intId !== null ? contacts.find(contact => contact.id === intId) : null

  return (
    <div className="flex-col">
      <div className="bg-gray-100 min-h-screen p-10 flex-col justify-center">
        {contact ? (
          <EditContact contact={contact} />
        ) : (
          <div>There does not exist a contact with the id: {id}</div>
        )}
      </div>
    </div>
  )
}

export default EditContactPage
