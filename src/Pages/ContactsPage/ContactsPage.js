import ContactsSection from 'components/ContactsSection';
import ContactsList from 'components/ContactsList';
import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';

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
