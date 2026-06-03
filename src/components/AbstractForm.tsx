import TallyEmbed from "@/components/TallyEmbed";

// Replace the URL below with the published Tally form embed URL once the
// abstract submission form has been created in Tally.
const ABSTRACT_FORM_URL = "TODO_TALLY_ABSTRACT_URL";

export default function AbstractForm() {
  return (
    <TallyEmbed
      src={ABSTRACT_FORM_URL}
      title="Abstract submission"
      minHeight={900}
    />
  );
}
