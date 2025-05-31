export default function Button({ text, handleButton }) {
  return (
    <button
      onClick={handleButton}
      className="relative inline-block px-5 py-2 text-teal-300 border border-teal-400 rounded-lg font-medium tracking-wide
                 bg-[#1f1f1f] hover:text-black hover:bg-teal-400
                 shadow-[0_0_10px_rgba(0,255,255,0.4)]
                 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
                 transition-all duration-300"
    >
      {text}
    </button>
  );
}