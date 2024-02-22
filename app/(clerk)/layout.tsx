export default function LayoutClerk({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center sm:px-8">
      {children}
    </div>
  );
}
