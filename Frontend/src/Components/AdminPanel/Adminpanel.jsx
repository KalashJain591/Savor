import React from 'react'
import "./Adminpanel.css"
function Adminpanel() {
  return (
    <div>
        <link rel="stylesheet" href="css/font-awesome.min.css"/>
        <link rel="stylesheet" href="css/style.css"/>
    
    
        <div class="header">
            <div class="head">
                <h1><a href="#">savor</a></h1>
                <form class="search-box"/>
                    <input class="text" type="text" name="search..." placeholder="Search..." required/>
                    <input class="sub" type="submit" value=""/>
             
                <ul class="nots">
                    <li><a class="envelope" href="#"><i class="fa fa-envelope"></i></a></li>
                    <li><a class="bell" href="#"><i class="fa fa-bell"></i></a></li>
                    <li><a class="tasks" href="#"><i class="fa fa-tasks"></i></a></li>
                </ul>
               
            </div>
            <div class="clearfix"></div>
        </div>
       
        <div class="sidbar">
            <ul class="menu">
                <li><a href="#"><i class="fa fa-tachometer"></i></a></li>
                <span>Dashboard</span>
                <li><a href="#"><i class="fa fa-cogs"></i></a></li>
                <span>Components</span>
                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                <span>Mail-Box</span>
               
               
            </ul>
        </div>
        <div class="clearfix"></div>
       
        <div class="content">
           
            <div class="row1">
                <div class="register">
                    <h2>83</h2>
                    <h2>Registered User</h2>
                    
                    <i class="fa fa-file-text-o"></i>
                </div>
                <div class="visitors">
                    <h2>185</h2>
                    <p>Daily Visitors</p>
                    
                    <i class="fa fa-eye"></i>
                </div>
                <div class="messeges">
                    <h2>23</h2>
                    <p>New order</p>
                    
                    <i class="fa fa-envelope"></i>     
                </div>
            </div>
            <div class="clearfix"></div>
          
            <div class="row2">
              
                <div class="table-1">
                    <table>
                        <caption>RECENT order</caption>
                        <thead>
                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    Project   
                                </td>
                                <td>
                                    customer 
                                </td>
                                <td>
                                status
                                </td>
                                <td>
                                    progress
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    aalo 
                                </td>
                                <td>
                                    work
                                </td>
                                <td>
                                    <span class="status in-progress">in progress</span>
                                </td>
                                <td>
                                    <span class="percent">50%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    chilli 
                                </td>
                                <td>
                                    evan
                                </td>
                                <td>
                                    <span class="status completed">completed</span>
                                </td>
                                <td>
                                    <span class="percent">100%</span>
                                </td>
                            </tr>                            
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    chilli   
                                </td>
                                <td>
                                    john
                                </td>
                                <td>
                                    <span class="status in-progress">in progress</span>
                                </td>
                                <td>
                                    <span class="percent">70%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    haldi  
                                </td>
                                <td>
                                    Danial
                                </td>
                                <td>
                                    <span class="status in-progress">in progress</span>
                                </td>
                                <td>
                                    <span class="percent">65%</span>
                                </td>
                            </tr>  
                            <tr>
                                <td>
                                    5 
                                </td>
                                <td>
                                    termeric  
                                </td>
                                <td>
                                    David
                                </td>
                                <td>
                                    <span class="status in-progress">in progress</span>
                                </td>
                                <td>
                                    <span class="percent">95%</span>
                                </td>
                            </tr>  
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    soap  
                                </td>
                                <td>
                                    Mickey
                                </td>
                                <td>
                                    <span class="status in-progress">in progress</span>
                                </td>
                                <td>
                                    <span class="percent">85%</span>
                                </td>
                            </tr>                                                                                                                 
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                    </table>
                </div>
               
                <div class="box-user">
                    <div class="box-top">
                        
                    </div>
                    <div class="box-down">
                        <h4>headline</h4>
                        <h3>Melorum</h3>
                        <p>yaha bhi kuch dal denge.</p>
                        <div class="social">
                            <a class="facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a class="twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a class="google" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
                    </div>                    
                </div>
               
            </div>
            <div class="clearfix"></div>
            
            <div class="row3">
                <div class="growth">
                    <div class="growth-top">
                        <i class="fa fa-share" aria-hidden="true"></i>
                        <p>growth</p>
                    </div>
                    <div class="growth-down">
                    <h2>45</h2><span>%</span>
                    </div>
                </div>
                <div class="new-user">
                    <div class="new-user-top">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <p>new user</p>
                    </div>  
                    <div class="new-user-down">
                        <h2>50</h2><span>%</span>
                    </div>
                </div>
                <div class="visit">
                    <div class="visit-top">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        <p>visitors</p> 
                    </div>  
                    <div class="visit-down">
                        <h2>70</h2><span>%</span>
                    </div>        
                </div>
                <div class="profit">
                    <div class="profit-top">
                        <i class="fa fa-usd" aria-hidden="true"></i>
                        <p>profit</p>
                    </div>
                    <div class="profit-down">
                        <h2>70</h2><span>%</span>
                    </div>   
                </div>
            </div>
            
            <div class="row4">
                
            </div>
           
        </div>
       
    </div>
  )
}

export default Adminpanel
