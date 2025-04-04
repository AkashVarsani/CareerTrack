import { Pie } from "react-chartjs-2";

const QuizResult = ({ answers, questions, timeLeft, submitted, reset }) => {
  if (!submitted) return null;

  const totalQuestions = 10;
  const score = answers.filter((ans, i) => ans === questions[i]?.ans).length;
  const attempted = answers.filter((ans) => ans !== null).length;
  const notAttempted = totalQuestions - attempted;
  const wrong = attempted - score;

  // Time Calculations
  const timeTaken = 600 - timeLeft; // in seconds
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  // Accuracy & Performance
  const accuracy = attempted > 0 ? ((score / attempted) * 100).toFixed(2) : 0;
  const successRate = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-p4-trans shadow-lg rounded-2xl text-center space-y-6 text-black text-start">
      <h2 className="text-3xl max-sm:text-xl font-bold text-p1  text-center">
        Quiz Results
      </h2>

      {/* Time Taken */}
      <div className="flex justify-center items-center space-x-4 text-lg max-sm:text-sm font-medium text-white">
        <p>⏳ Time Taken:</p>
        <span className="bg-gray-100 text-black px-3 py-1 rounded-lg">
          {minutes} min {seconds} sec
        </span>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-2 gap-4 text-lg  max-sm:text-sm">
        <p className="bg-green-200 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>✅ </span>
          <span>Correct: </span>
          <span>{score}</span>
        </p>
        <p className="bg-red-200 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>❌ </span>
          <span>Wrong: </span>
          <span>{wrong}</span>
        </p>
        <p className="bg-yellow-200 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>📌 </span>
          <span>Attempted: </span>
          <span>{attempted}</span>
        </p>
        <p className="bg-p1 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>❔ </span>
          <span>Not Attempted: </span>
          <span>{notAttempted}</span>
        </p>
        <p className="bg-blue-100 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>🎯 </span>
          <span>Accuracy: </span>
          <span>{accuracy}%</span>
        </p>
        <p className="bg-purple-100 flex max-sm:flex-col px-4 py-2 rounded-lg">
          <span>🏆 </span>
          <span>Success Rate: </span>
          <span>{successRate}%</span>
        </p>
      </div>

      {/* Circular Progress Bar (Score) */}
      <div className="sm:flex items-center justify-center">
        <div className="relative h-32 mx-auto">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#7ab6facc"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#0ae93af1"
              strokeWidth="8"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset={(251.2 * (100 - successRate)) / 100}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-white inset-0 flex justify-center items-center text-xl font-bold">
            {successRate}%
          </div>
        </div>

        {/* Pie Chart for Distribution */}
        <div className="mx-auto">
          <Pie
            data={{
              labels: ["Correct", "Wrong", "Not Attempted"],
              datasets: [
                {
                  data: [score, wrong, notAttempted],
                  backgroundColor: ["#4caf50", "#f44336", "#43b1e4"],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "#fff", // Set legend label color (change to white if dark background)
                    font: {
                      size: 14, // Optional: change font size
                      weight: "bold", // Optional: bold text
                    },
                  },
                },
                tooltip: {
                  bodyColor: "#000", // Tooltip text color
                  backgroundColor: "#fff", // Tooltip background
                  titleColor: "#000", // Tooltip title color
                },
              },
            }}
          />
        </div>
      </div>
      <div
        onClick={() => reset()}
        className="bg-purple-100 text-center px-4 py-2 rounded-lg"
      >
        Close Result
      </div>
    </div>
  );
};

export default QuizResult;
