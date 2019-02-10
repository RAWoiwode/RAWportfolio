import React, { Fragment } from 'react'
import SkillBar from './skill-bar'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </Fragment>
  )
}
