import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import login from './pages/login'
import main from './pages/main'
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={login}></Route>
      <Route path="/dev/:id" component={main}></Route>
    </BrowserRouter>
  )
}