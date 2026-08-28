import TallyEmbed from "@/components/TallyEmbed";

// Published Tally embed URL for the contact form. The form's own email
// notification is what delivers messages to the organizers.
const CONTACT_FORM_URL =
  "https://tally.so/embed/LZLjzp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function ContactForm() {
  return (
    <TallyEmbed
      src={CONTACT_FORM_URL}
      title="Contact"
      minHeight={520}
    />
  );
}
