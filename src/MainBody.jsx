import Student from "./Components/Student/Student.jsx";
import StudentReview from "./Components/Student/StudentReview.jsx";

function MainBody() {

    const whatWeWillLearn = "React JS";
    const totalLectureCount = 3;
  
    return (
      <div style={{minHeight:"70vh"}}>
        <p>In this Course, we will learn {whatWeWillLearn} by buildng TaskOPedia!<br/>
        Total Lecture - {totalLectureCount} </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        {/* <div>
          Enter Task :{" "}
          <input maxLength={5} readOnly={false} placeholder='Ben'/>
        </div> */}
         <div className='container row'>Students Enrolled</div>
            <Student experience = {2} name="Kris Valley" headshot = "https://api.lorem.space/image/face?w=150&h=150" >
                <StudentReview></StudentReview>
            </Student>
            <Student experience = {3} name="pat Cummins" headshot ="https://api.lorem.space/image/face?w=150&h=150" >
                <StudentReview></StudentReview>
            </Student>
            <Student experience = {4} name="Virat Kohli" headshot ="https://api.lorem.space/image/face?w=150&h=150" />
     
      </div>
    );
  }

  export default MainBody;