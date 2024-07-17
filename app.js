document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;

    // Store workout data (in localStorage for simplicity)
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push({ exercise, sets, reps });
    localStorage.setItem('workouts', JSON.stringify(workouts));

    // Clear form
    document.getElementById('workoutForm').reset();
});
