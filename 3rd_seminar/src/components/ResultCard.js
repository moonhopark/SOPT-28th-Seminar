import React from 'react';

const ResultCard = ({ userData }) => {
  return userData && (
    <div className="result_card">
      <img style={{width: '100px', height: '100px'}} src={userData.avatar_url} alt="" />
      <p className="result_name">{userData.name}</p>
      <p className="result_id">{userData.login}</p>
      <p className="result_bio">{userData.bio}</p>
      <div className="result_list">
        <p className="result_followrs">Followers: {userData.followers}</p>
        <p className="result_followrs">Following: {userData.following}</p>
        <p className="result_repos">Repos: {userData.public_repos}</p>
      </div>
    </div>
  )
}

export default ResultCard;