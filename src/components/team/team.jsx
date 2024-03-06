import team from "../../faker/data";
const Team = () => {
  return (
    <>
      <div className="teamMember">
        { team.map((single_item, index) => {
           return <div className="singleMember" key={index}>
                    <div className="userImage">
                    <img src={single_item.photo} alt="" />
                    </div>
                    <h2>{single_item.name}</h2>
                    <p>{single_item.skill}</p>
                </div>
        })}
        
      </div>
    </>
  )
}

export default Team;
