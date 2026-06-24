export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
        <p className="font-medium text-gray-700">KGOVSolutions</p>
        <p className="mt-1">Solutions for government agencies.</p>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} KGOVSolutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
