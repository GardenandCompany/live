
export function Button({ children, ...props }) {
  return (
    <button {...props} className="rounded-xl px-4 py-2 font-semibold bg-green-700 text-white hover:bg-green-600 w-full transition">
      {children}
    </button>
  );
}
