import React from 'react'


const UserCard = ({ user }) => {
    const {firstName, lastName, photoUrl, age, about, gender } = user;
  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={user.photoUrl}
      alt="User Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    { age && gender && <p>{age + " " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4 gap-4">
        <button className="btn btn-accent ">IGNORE</button>
        <button className="btn btn-success">INTERESTED</button>
    </div>
  </div>
        </div>
    </div>
  );
}

export default UserCard;