// Imports general
import { FormEvent, useState } from "react";
import axios from "axios";

const WorkoutForm = () => {
    //Vars
    const [title, SetTitle] = useState<string>('');
    const [load, SetLoad] = useState<string>('');
    const [reps, SetReps] = useState<string>('');

    const [errorMessage, setErrorMessage] = useState<string>('');

    //Functions
    const handleWorkoutSave = async (e: FormEvent) => {
        e.preventDefault(); //Prevent form been submitted

        const workoutToSave = { title, load, reps };

        try {
            const response = await axios.post('http://localhost:4200/api/workouts', workoutToSave);
            setErrorMessage(''); // Clear error if there is any

            console.log('New workout added');
            console.log(response.data);


            //Reset the form setTitle, setLoad, setReps to empty string
            if (response.status === 200) {
                SetTitle('');
                SetLoad('');
                SetReps('');
            }

        } catch (error: any) {
            if (error.response) {
                setErrorMessage(`Server error: ${error.response.status}`);
            } else if (error.request) {
                setErrorMessage('It didnt get a response from server');
            } else {
                setErrorMessage(`Request error: ${error.message}`);
            }
        }


    }


    return (
        <form className="create" onSubmit={handleWorkoutSave}>
            <h3>Add a new workout</h3>

            <label>Exercise Title:</label>
            <input type="text"
                onChange={(e) => SetTitle(e.target.value)}
                value={title} />


            <label>Load(kg): </label>
            <input type="number"
                onChange={(e) => SetLoad(e.target.value)}
                value={load} />

            <label>Reps: </label>
            <input type="number"
                onChange={(e) => SetReps(e.target.value)}
                value={reps} />

            <button type="submit">Add workout</button>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
    );
}

export default WorkoutForm;