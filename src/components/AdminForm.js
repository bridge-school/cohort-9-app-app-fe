import React from "react";
import { connect } from "react-redux";
// import { push } from "react-router-redux";

import {
  setCohortName,
  setCohortType,
  setFormDetails
} from "../redux/actions/adminFormActions";

import TextInput from "./TextInput";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import DatePickerContainer from "./DatePickerContainer";

const AdminForm = props => {
  const handleCohortNameChange = e => {
    props.setCohortName(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // alert("Submitting");
    console.log(props);
    const cohortData = {
      cohortName: props.cohortName,
      cohortType: props.cohortType,
      link: "/"
    };
    console.log(cohortData);

    try {
      const res = await fetch("/applications", {
        method: "post",
        body: JSON.stringify(cohortData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const apiResponse = await res.json();
      if (!apiResponse.hasOwnProperty("errors")) {
        props.setFormDetails(props.cohortName, props.cohortType);
        // props.history.push("/admin/cohorts");
      }
      // } else {
      //   resolve(apiResponse.data);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCohortTypeChange = e => {
    props.setCohortType(e.target.value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // alert("Submitting");
  //   console.log(props);
  //   const data = {
  //     cohortName: props.cohortName,
  //     cohortType: props.cohortType,
  //     link: "/"
  //   };
  //   console.log(data);
  //   // const data = new FormData(e.target);

  //   fetch("/applications", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   // on submit we need to save the form in DB
  // };

  const selectOptions = [
    { value: "Frontend Development", displayedName: "Frontend Development" },
    { value: "Backend Development", displayedName: "Backend Development" },
    { value: "Product Design", displayedName: "Product Design" }
  ];

  return (
    <div>
      <form
        // onSubmit={props =>
        //   new Promise((resolve, reject) => {
        //     // const fakeData = {
        //     //   cohortType: "yyyyyyjjjj",
        //     //   cohortName: "cohort01",
        //     //   link: "/"
        //     // };
        //     console.log("inside form");
        //     console.log(props);
        //     fetch("/applications", {
        //       method: "post",
        //       body: JSON.stringify(props),
        //       headers: {
        //         "Content-Type": "application/json"
        //       }
        //     })
        //       .then(res => res.json())
        //       .then(res => {
        //         if (res.hasOwnProperty("errors")) {
        //           reject(res.errors);
        //         } else {
        //           resolve(res.data);
        //         }
        //       });
        //   })
        // }
        onSubmit={handleSubmit}
      >
        <TextInput
          value={props.cohortName}
          handleChange={handleCohortNameChange}
        />
        <Select
          value={props.cohortType}
          handleChange={handleCohortTypeChange}
          options={selectOptions}
        />
        <DatePickerContainer />
        <SubmitButton />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cohortName: state.cohortInfo.cohortName,
    cohortType: state.cohortInfo.cohortType,
    isSubmitted: state.cohortInfo.isSubmitted,
    cohortObject: state.cohortInfo.cohortObject
  };
};

const mapDispatchToProps = {
  setCohortName,
  setCohortType,
  setFormDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm);
