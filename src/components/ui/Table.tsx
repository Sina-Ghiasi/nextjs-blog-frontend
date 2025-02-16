import { ReactNode } from "react";

export default function Table({ children }: { children: ReactNode }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

function TableHead({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
