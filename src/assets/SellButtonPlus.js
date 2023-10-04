import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function SellButtonPlus(params) {
  const history = useHistory()
  const sell = () => {
    history.push('/create')
  }
  return (
    <div onClick={sell} style={{ cursor: 'pointer' }}>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 1024 1024"
        data-aut-id="icon"
        className
        fillRule="evenodd"
      >
        <path
          className="rui-367TP"
          d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"
        />
      </svg>
    </div>
  )
}