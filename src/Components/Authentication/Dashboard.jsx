import React from 'react'
import './dashboard.css'
import Dashboardcarts from './Dashboardcarts'
export default function Dashboard() {
  return (
   <div>
    <div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src="https://img.icons8.com/fluency/512/user-male-circle.png" alt=""/>
            <h3>Vishal Sharma</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Customer ID:</strong>321000001</p>
            {/* <p class="mb-0"><strong class="pr-1">Class:</strong>4</p> */}
            {/* <p class="mb-0"><strong class="pr-1">Section:</strong>A</p> */}
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0">General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">Roll</th>
                <td width="2%">:</td>
                <td>125</td>
              </tr>
              <tr>
                <th width="30%">Academic Year	</th>
                <td width="2%">:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>Group</td>
              </tr>
              <tr>
                <th width="30%">blood</th>
                <td width="2%">:</td>
                <td>B+</td>
              </tr>
            </table>
          </div>
        </div>
        <Dashboardcarts/>
      </div>
    </div>
  </div>
</div>

   </div>
  )
}
