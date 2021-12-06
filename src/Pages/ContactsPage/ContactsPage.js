import ContactsSection from 'components/ContactsSection/ContactsSection';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

export default function ContactsPage() {
  return (
    <>
      <ContactsSection title="Phonebook">
        <ContactsForm />
      </ContactsSection>
      <ContactsSection title="Contacts">
        <ContactsFilter />
        <ContactsList />
      </ContactsSection>
    </>
  );
}
