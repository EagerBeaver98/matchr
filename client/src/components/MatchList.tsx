import React, { useEffect } from 'react';
import '../App.scss';
import '../bootstrap/vendor/bootstrap/css/bootstrap.css'
import MatchListItem from './MatchListItem';

function MatchList(props: any) {
  
  useEffect(() => {
    props.getMatchData(props.cookies.get('email'), props.partner)
  }, [])

  return (
    <div className="matches">
      <h1 className="mt-5">Matches</h1>
      <ul className="match-list">
      {props.matchList && props.matchList.map((match: any) => {
        return (<MatchListItem key={match.id} match={match}/>)
      })}
      </ul>
    </div>
  );
}

export default MatchList