import React from 'react'

import Topbar from "./scenes/global/Topbar";
import ProSidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/DashBoard.jsx";
import Team from "./components/Team.jsx";
import Invoices from "./components/Invoices.jsx";
import Contacts from "./components/Contacts.jsx";
import Bar from "./components/Bar.jsx";
import Form from "./components/Form.jsx";
import Line from "./components/Line.jsx";
import Pie from "./components/Pie.jsx";
import FAQ from "./components/FAQ.jsx";
import Geography from "./components/Geography.jsx";
import Calendar from './components/Calendar.jsx'
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="">
          <ProSidebar />
          <main className="">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
    </>
  )
}

export default App