import React from "react";
/**
 * Renders information about the user obtained from MS Graph 
 * @param props
 */
export const ProfileData = (props) => {
  return (
    //Array.prototype.forEach.call(props.graphData.value, element => {
    props.graphData.value.map((element, i) => {
      var enabledRule = "Enabled";
      if(element.properties.enabled.toString() !== "true")
      {
        enabledRule = "Disabled";
      }
      const x="";
      return (
      <div className="profile-div">
        <p>
          {/* <strong>First Name: </strong> {props.graphData.givenName} */}
          <strong>Title: </strong> {element.properties.displayName}
        </p>
        <p>
          <strong>Rule Type: </strong> {element.kind}
        </p>
        <p>
          <strong>Enabled: </strong> {enabledRule}
        </p>
        <p>
          <strong>Severity: </strong> {element.properties.severity}
        </p>
      </div>
    )
    })
)};