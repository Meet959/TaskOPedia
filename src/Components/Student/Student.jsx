import {faker} from "@faker-js/faker"
import React from "react";

// const Student = (props) => {
//   const fullName = props.name;
//   const programmingExp = props.experience;
//   const headshot =  faker.image.avatar();  // props.headshot
//   return (
//   <div className='col-4 p-1'>
//       <div className='row border'>
//           <div className='col-2'>
//             {/* <img src={`https://ui-avatars.com/api/?name=${fullName}`} className='w-100'/>  */}
//             <img src={headshot} className='w-100 py-2' alt="Student Image"/> 
//           </div>
//           <div className='col-8'>
//             {fullName}
//             <br/>
//             Programming Expereince : {programmingExp} years
//           </div>
//           <div className="col-2">
//             {props.children}
//           </div>
//       </div>
//     </div>
//   );
// }


class Student extends React.Component {
  render(){
    return (
      <div className='col-4 p-1'>
          <div className='row border'>
              <div className='col-2'>
                <img src={this.props.headshot} className='w-100 py-2' alt="Student Image"/> 
              </div>
              <div className='col-8'>
                {this.props.name}
                <br/>
                Programming Expereince : {this.props.experience} years
              </div>
              <div className="col-2">
                {this.props.children}
              </div>
          </div>
        </div>
    );
  }
}

export default Student;