// Placeholder for sections whose content the organizers have not released yet.
// Keeps the section (and its anchor) on the page without publishing details
// that are not confirmed.
export default function ComingSoonPanel({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-brand">Coming soon</p>
      {children && (
        <p className="mt-3 mx-auto max-w-md text-gray-600 leading-relaxed">{children}</p>
      )}
    </div>
  );
}
