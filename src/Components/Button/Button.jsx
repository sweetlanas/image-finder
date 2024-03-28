const Button = ({ onLoadMore }) => {
    return (
      <button
        onClick={onLoadMore}
        type="button"
        className="loadMore-button"
      >
        Load more
      </button>
    );
  };
  
  export default Button;