"use strict";
var React = require("react");
var TeacherInfo = require("./TeacherInfo.jsx")
var ReviewInfo = require("./ReviewInfo.jsx")
var AddReview = require("./AddReview.jsx")

module.exports = React.createClass({
   render:function(){
       return(
          <div>
             <div className="row">
                <div className="col-md-5">
                      <TeacherInfo />
                </div>
                <div className="col-md-7">
                  <AddReview />
                </div>              
             </div>
             <div className="row reviews text-center">
                {
                  this.props.reviews.reverse().map(function(s,index){
                      return(
                          <ReviewInfo info={s} key={"review"+index} />
                      )         
                  })
                }
              </div>
            </div>
       )
   } 
});