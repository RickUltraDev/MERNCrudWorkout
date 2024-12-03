// Components
import WorkoutCard from "./WorkoutCard";
import WorkoutForm from "./WorkoutForm";

// Interfaces
import { Workout } from "../interfaces/workout";

// Imports general
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    // Vars
    const [workouts, setWorkouts] = useState<Workout[]>([]);

    // States
    //Getting workouts from Backend
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await axios.get<Workout[]>("http://localhost:4200/api/workouts");

                setWorkouts(response.data);

            } catch (err) {
                if (axios.isAxiosError(err)) {
                    console.log(err.message);
                } else {
                    console.log("Unknown error");
                }
            }
        };

        fetchWorkouts();
    }, []);



    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutCard key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>

    );
}
export default HomePage;