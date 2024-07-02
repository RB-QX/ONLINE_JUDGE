// // import React from "react";
// // import moment from "moment";

// // const CalendarGrid = ({ solvedDates }) => {
// //   // Generate an array of months
// //   const months = moment.months();

// //   // Function to check if a date is solved
// //   const isSolved = (date) => {
// //     return solvedDates.includes(date.format("YYYY-MM-DD"));
// //   };

// //   // Generate the days for a given month
// //   const generateDays = (month, year) => {
// //     const firstDay = moment(`${year}-${month + 1}-01`);
// //     const daysInMonth = firstDay.daysInMonth();
// //     const days = [];
// //     for (let i = 1; i <= daysInMonth; i++) {
// //       const currentDate = moment(`${year}-${month + 1}-${i}`);
// //       days.push(
// //         <div
// //           key={i}
// //           style={{
// //             width: "18px",
// //             height: "18px",
// //             display: "inline-block",
// //             margin: "1px",
// //             backgroundColor: isSolved(currentDate)
// //               ? "green"
// //               : "rgba(255, 255, 255, 0)",
// //             color: "black",
// //             textAlign: "center",
// //             lineHeight: "20px",
// //             fontSize: "12px",
// //             borderRadius: "10%",

// //           }}
// //         >
// //           {i}
// //         </div>
// //       );
// //     }
// //     return days;
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexWrap: "nowrap",
// //         overflowX: "auto ",
// //         backgroundColor: "white",
// //       }}
// //     >
// //       {months.map((month, index) => (
// //         <div key={month} style={{ marginRight: "10px" }}>
// //           <h3 style={{ textAlign: "center", fontSize: "16px" }}>{month}</h3>
// //           <div
// //             style={{
// //               display: "flex",
// //               flexWrap: "wrap",
// //               justifyContent: "center",
// //             }}
// //           >
// //             {generateDays(index, moment().year())}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // Example usage
// // const solvedDates = [
// //   "2024-01-15",
// //   "2024-02-10",
// //   "2024-03-25",
// //   "2024-04-01",
// //   // Add more solved dates here
// // ];

// // const CalenderPage = () => {
// //   return (
// //     <div>
// //       <h1>Problem Solving Calendar</h1>
// //       <CalendarGrid solvedDates={solvedDates} />
// //     </div>
// //   );
// // };

// // export default CalenderPage;

// import React from "react";
// import moment from "moment";
// import "./Calender.css"; // Assuming you create a CSS file for styles

// const CalendarGrid = ({ solvedDates }) => {
//   // Generate an array of months
//   const months = moment.months();

//   // Function to check if a date is solved
//   const isSolved = (date) => {
//     return solvedDates.includes(date.format("YYYY-MM-DD"));
//   };

//   // Generate the days for a given month
//   const generateDays = (month, year) => {
//     const firstDay = moment(`${year}-${month + 1}-01`);
//     const daysInMonth = firstDay.daysInMonth();
//     const days = [];
//     for (let i = 1; i <= daysInMonth; i++) {
//       const currentDate = moment(`${year}-${month + 1}-${i}`);
//       days.push(
//         <div
//           key={i}
//           className={`day-box ${isSolved(currentDate) ? "solved" : ""}`}
//         >
//           {i}
//         </div>
//       );
//     }
//     return days;
//   };

//   return (
//     <div className="calendar-container">
//       {months.map((month, index) => (
//         <div key={month} className="month-container">
//           <h3 className="month-title">{month}</h3>
//           <div className="days-container">
//             {generateDays(index, moment().year())}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Example usage
// const solvedDates = [
//   "2024-01-15",
//   "2024-02-10",
//   "2024-03-25",
//   "2024-04-01",
//   "2024-02-11",
//   // Add more solved dates here
// ];

// const CalenderPage = () => {
//   return (
//     <div>
//       <h1>Problem Solving Calendar</h1>
//       <CalendarGrid solvedDates={solvedDates} />
//     </div>
//   );
// };

// export default CalenderPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./Calender.css"; // Assuming you create a CSS file for styles

const CalendarGrid = ({ solvedDates }) => {
  const months = moment.months();

  const isSolved = (date) => {
    return solvedDates.includes(date.format("YYYY-MM-DD"));
  };
  console.log(solvedDates);
  const generateDays = (month, year) => {
    const firstDay = moment(`${year}-${month + 1}-01`);
    const daysInMonth = firstDay.daysInMonth();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = moment(`${year}-${month + 1}-${i}`);
      days.push(
        <div
          key={i}
          className={`day-box ${isSolved(currentDate) ? "solved" : ""}`}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      {months.map((month, index) => (
        <div key={month} className="month-container">
          <h3 className="month-title">{month}</h3>
          <div className="days-container">
            {generateDays(index, moment().year())}
          </div>
        </div>
      ))}
    </div>
  );
};

const CalenderPage = () => {
  const [solvedDates, setSolvedDates] = useState([]);
  const userId = localStorage.getItem("userId"); // Replace with the actual user ID

  // useEffect(() => {
  //   const fetchSolvedDates = async () => {
  //     try {
  //       console.log(userId);
  //       const response = await axios.get(
  //         `http://localhost:8000/solvedate/${userId}`
  //       );
  //       // if (response.data.success) {
  //       //   setSolvedDates(response.data.solvedDates);
  //       // } else {
  //       //   console.error("Failed to fetch solved dates:", response.data.message);
  //       // }
  //       const data = await response.json();
  //       if (data.success) {
  //         const formattedDates = data.solvedDates.map((date) =>
  //           moment(date).format("YYYY-MM-DD")
  //         );
  //         console.log("Formatted Dates:", formattedDates); // Log formatted dates
  //         setSolvedDates(formattedDates);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching solved dates:", error);
  //     }
  //   };

  //   fetchSolvedDates();
  // }, [userId]);
  useEffect(() => {
    const fetchSolvedDates = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/solvedate/${userId}`
        );
        const data = await response.json();
        if (data.success) {
          const formattedDates = data.solvedDates.map((date) =>
            moment(date).format("YYYY-MM-DD")
          );
          console.log("Formatted Dates:", formattedDates); // Log formatted dates
          setSolvedDates(formattedDates);
        }
      } catch (error) {
        console.error("Error fetching solved dates:", error);
      }
    };

    fetchSolvedDates();
  }, []);

  return (
    <div>
      {/* <h1 className=" text-yellow-400">Problem Solving Calendar</h1> */}
      <CalendarGrid solvedDates={solvedDates} />
    </div>
  );
};

export default CalenderPage;
