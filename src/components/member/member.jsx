function Member({member}) {
  return (
    <>
      <div className="singleMember">
            <div className="userImage">
            <img src={member.photo} alt="" />
            </div>
            <h2>{member.name}</h2>
            <p>{member.skill}</p>
        </div>
    </>
  )
}

export default Member;
