const Searchbar = ({ onSetQuery, query, onSubmit, onRemoveText }) => {
  return (
    <header className="Searchbar">
      <form onSubmit={onSubmit} className="SearchForm">
        <input
          onInput={onSetQuery}
          className="SearchForm-input"
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button onClick={onRemoveText} type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      <p>&larr;</p>
      <p>
        Random pictures
        <br /> just click here
      </p>
    </header>
  );
};

export default Searchbar;