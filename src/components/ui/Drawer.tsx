"use client";

import ClientOnlyPortal from "./ClientOnlyPortal";

export default function Drawer({
  children,
  open,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ClientOnlyPortal selector="body">
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
          open ? "block" : "hidden pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 w-[250px] transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="bg-secondary-0 max-h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </ClientOnlyPortal>
  );
}
