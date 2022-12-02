function Book({ joke }) {
    return (
        <li>
            <h2>{joke.type}</h2>
            <h2>{joke.category}</h2>
        </li>
    );
}

export default Book;
