import TallyEmbed from "@/components/TallyEmbed";

// Replace the URL below with the published Tally form embed URL once the
// contact form has been created in Tally. The form's own email notification
// is what delivers messages to the organizers.
const CONTACT_FORM_URL = "TODO_TALLY_CONTACT_URL";

export default function ContactForm() {
  return (
    <TallyEmbed
      src={CONTACT_FORM_URL}
      title="Contact"
      minHeight={520}
    />
  );
}
