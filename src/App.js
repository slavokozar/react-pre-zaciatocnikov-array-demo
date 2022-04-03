import {useState} from "react";

function App() {

    const [time, setTime] = useState(Date.now());
    const [array, setArray] = useState([1, 2, 3, 4]);

    function addItem() {
        const randomValue = Math.floor(Math.random() * 10);
        array.push(randomValue);

        console.log(array);
        setArray(array);
    }

    function deleteItem() {
        array.splice((array.length - 1), 1);

        console.log(array);
        setArray(array);
    }

    function changeItem() {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomValue = Math.floor(Math.random() * 10);
        array[randomIndex] = randomValue;

        console.log(array);
        setArray(array);
    }


    function addItemImmutable() {
        const randomValue = Math.floor(Math.random() * 10);
        const newArray = array.concat(randomValue);

        setArray(newArray);
    }

    function deleteItemImmutable() {
        const newArray = array.filter((a, i) => i !== array.length - 1);

        setArray(newArray);
    }

    function changeItemImmutable() {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomValue = Math.floor(Math.random() * 10);

        const newArray = array.map((a, i) => ( i === randomIndex ? randomValue : a))
    }

    const date = new Date(time);

    return (
        <div>
            <div style={{marginBottom: '2rem'}}>
                Rendered at {`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}
            </div>
            <div style={{marginBottom: '2rem'}}>
                {
                    array.map((value, index) => (
                        <span style={{margin: '2rem', fontSize: '2rem'}} key={index}>{value}</span>
                    ))
                }
            </div>
            <div>
                <button style={{margin: '1rem'}} onClick={addItem}>Add</button>
                <button style={{margin: '1rem'}} onClick={changeItem}>Change</button>
                <button style={{margin: '1rem'}} onClick={deleteItem}>Delete</button>
            </div>
            <div>
                <button style={{margin: '1rem'}} onClick={addItemImmutable}>Add Immutable</button>
                <button style={{margin: '1rem'}} onClick={changeItemImmutable}>Change Immutable</button>
                <button style={{margin: '1rem'}} onClick={deleteItemImmutable}>Delete Immutable</button>
            </div>
            <div>
                <button style={{margin: '1rem'}} onClick={ () => setTime(Date.now()) }>Render!</button>
            </div>
        </div>

    );
}

export default App;
