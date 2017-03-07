
"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");

module.exports = React.createClass({
    deleteReview: function(e){
        e.preventDefault();
        actions.deleteReview(this.props.info);
    },
    render:function(){
        var totalScore = this.props.info.totalScore;
        var rows = [];
        var criterias = this.props.info.criterias;
        for (var i = 0; i < criterias.length; i++) {
        rows.push(
                <div className={((criterias[i].selection==1)?"good-review":" bad-review")+" panel-body"} key={"criteria_description"+(i+1)}> {criterias[i].description + ": " + (criterias[i].selection==1?"Yes!!":"No :(")}</div>
          );
        }
        return(
            <div className="panel panel-default">
                <div className="bg-color panel-heading text-center">                    
                    <img src={"./img/"+totalScore+"_star.png"} className="inline-img-responsive rating-stars-img " id="stars-img" name="stars-img"/>
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteReview}>&times;</span>
                </div>
                {rows}
                <div className="panel-body comments">Comments: {this.props.info.comments}</div>
            </div>
        )
    }
})