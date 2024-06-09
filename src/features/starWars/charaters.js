import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, setPage } from './starWar';

const Characters = () => {
  const dispatch = useDispatch();
  const { characters, loading, error, page } = useSelector((state) => state.starWars);

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {characters.map((char) => (
          <li key={char.name}>{char.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => dispatch(setPage(page + 1))}>
        Next
      </button>
    </div>
  );
};

export default Characters;
