import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 30,
  });
  // Create add and remove functions here that changes the
  // state.

  const [books, setBooks] = useState(inv.books);
  const [notebooks, setNotebooks] = useState(inv.notebooks);
  const [pens, setPens] = useState(inv.pens);
  const [inkpens, setInkpens] = useState(inv.inkpens);

  const [total, setTotal] = useState(
    inv.books + inv.notebooks + inv.pens + inv.inkpens
  );

  // books booksHandle
  const booksHandler = (value) => {
    setBooks(books + value);
    setInv({
      ...inv,
      books: books,
    });
    totalHandenHandler();
  };

  // notebooks notebooksHandle
  const notebooksHandler = (value) => {
    setNotebooks(notebooks + value);
    setInv({
      ...inv,
      notebooks: notebooks,
    });
    totalHandenHandler();
  };

  // pens booksHandle
  const pensHandler = (value) => {
    setPens(pens + value);
    setInv({
      ...inv,
      pens: pens,
    });
    totalHandenHandler();
  };

  // inkpens inkpensHandle
  const inkpensHandle = (value) => {
    setInkpens(inkpens + value);
    setInv({
      ...inv,
      inkpens: inkpens,
    });
    totalHandenHandler();
  };

  // total totalHanden
  const totalHandenHandler = () => {
    setTotal(inv.books + inv.notebooks + inv.pens + inv.inkpens);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={() => booksHandler(1)} className="circlularButton">
          +
        </button>
        <button onClick={() => booksHandler(-1)} className="circlularButton">
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={() => notebooksHandler(1)} className="circlularButton">
          +
        </button>
        <button
          onClick={() => notebooksHandler(-1)}
          className="circlularButton"
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={() => pensHandler(1)} className="circlularButton">
          +
        </button>
        <button onClick={() => pensHandler(-1)} className="circlularButton">
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button onClick={() => inkpensHandle(1)} className="circlularButton">
          +
        </button>
        <button onClick={() => inkpensHandle(-1)} className="circlularButton">
          -
        </button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
