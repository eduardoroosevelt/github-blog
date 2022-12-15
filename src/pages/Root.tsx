import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

import {RootContainer,RootContent} from './root-style'

function Root() {
  

  return (
    <RootContainer>
      <RootContent>
        <Header/>
        <Outlet />
      </RootContent>
    </RootContainer>
  )
}

export default Root
