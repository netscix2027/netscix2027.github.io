import TallyEmbed from "@/components/TallyEmbed";

// Replace the URL below with the published Tally form embed URL once the
// registration form has been created in Tally.
const REGISTRATION_FORM_URL = "TODO_TALLY_REGISTRATION_URL";

export default function RegistrationForm() {
  return (
    <TallyEmbed
      src={REGISTRATION_FORM_URL}
      title="Registration"
      minHeight={900}
    />
  );
}
