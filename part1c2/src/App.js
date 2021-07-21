import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    z: 0, o: 0, t: 0, th: 0, f: 0, fi: 0, s: 0
  })

  const randomNum = (max) => {
    return Math.floor(Math.random() * max)
  }

  const handleClickChange = () => setSelected(randomNum(7))

  const getTotalCount = () => {
    if(selected === 0 ){
      return votes.z
    } else if(selected === 1){
      return votes.o
    } else if(selected === 2){
      return votes.t
    } else if(selected === 3){
      return votes.th
    } else if(selected === 4){
      return votes.f
    } else if(selected === 5){
      return votes.fi
    } else if(selected === 6){
      return votes.s
    } else {
      return 0
    }
  }

  const totalCount = getTotalCount()

  const handleClickVote = () => {
        if(selected === 0 ){
          const newVotes = {
          ...votes,
          z : votes.z + 1
        }
          setVotes(newVotes)
        } else if(selected === 1){
          const newVotes = {
          ...votes,
          o : votes.o + 1
        }
          setVotes(newVotes)
        } else if(selected === 2){
          const newVotes = {
          ...votes,
          t : votes.t + 1
        }
          setVotes(newVotes)
        }else if(selected === 3){
          const newVotes = {
          ...votes,
          th : votes.th + 1
        }
          setVotes(newVotes)
        }else if(selected === 4){
          const newVotes = {
          ...votes,
          f : votes.f + 1
        }
          setVotes(newVotes)
        }else if(selected === 5){
          const newVotes = {
          ...votes,
          fi : votes.fi + 1
        }
          setVotes(newVotes)
        }else if(selected===6){
          const newVotes = {
          ...votes,
          s : votes.s + 1
        }
          setVotes(newVotes)
        }
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
        <div>
          <button onClick={handleClickChange}>New</button>
        </div>
        <div>Total Votes {totalCount}</div>
        <div>
          <button onClick={handleClickVote}>Vote</button>
        </div>
    </div>
  )
}

export default App
