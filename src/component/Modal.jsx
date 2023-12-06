const Modal = ({ isOpen, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 overflow-hidden z-10"
      style={isOpen ? { display: "none" } : null}
    >
      <div className="max-w-4xl w-full h-screen md:h-[70%] absolute top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
};
export default Modal;
