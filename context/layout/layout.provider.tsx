import React, { useReducer } from 'react'
import { LayoutContext } from './layout.context'
const INITIAL_STATE = {
  pageLayout: 'domminus',
  pageOpt: '',
  footerOpt: 'common',
}

function reducer(state: any, action: any) {
  switch (action.key) {
    case `domminus`:
      return {
        ...state,
        pageLayout: 'domminus',
        pageOpt: '',
      }
  }
}

export const LayoLayoutProvider: React.FunctionComponent = ({ children }) => {
  const [layoutState, layoutDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <LayoutContext.Provider value={{ layoutState, layoutDispatch }}>
      {children}
    </LayoutContext.Provider>
  )
}
