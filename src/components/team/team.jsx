import team from "../../faker/data";
import Member from "../member/member";
const Team = () => {
  return (
    <>
      <div className="teamMember">
        { team.map((single_item, index) => (
           <Member member={single_item} key={index} />
        ))}
        
      </div>
    </>
  )
}

export default Team;
