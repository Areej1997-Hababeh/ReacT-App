import './Main.css';
import React from 'react';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";



const Main = () => (
  <Formik
  
    initialValues={{ email: "",name:"",role:"" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address.";
      }
      const passwordRegex = /(?=.*[0-9])/;
      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length > 8 && !(passwordRegex.test(values.name))) {
        errors.name = "Invalid Length";
      } else if (passwordRegex.test(values.name)) {
        errors.name = "Invalid Name";
      }
      if(values.role.match("Select current role")){
        errors.role="role is required";
      }
      return errors;
    }}

  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (

        <div class="All">

          <div class="title">
            <h1>
              freeCodeCamp Survey Form
    </h1>
            <p>
              Thank you for taking the time to help us improve the platform
    </p>
          </div>
          <div class="container">
            <form id="survey-form" onSubmit={handleSubmit}>
              <label for="name">
                Name
            </label>
              <br />
              <input type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                className={errors.name && touched.name && "error"}
              />
               {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <br />
              <label for="email">
                Email
          </label>
              <br />
              <input type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <br />
              <label for="age">
                Age (optional)
          </label>
              <br />
              <input type="number"
                id="age"
                name="age"
                placeholder="Age"
              />
              <br />
              <label for="role">
                Which option best describes your current role?
          </label>
              <br />
              <select class="role"
                name="role"
                id="role"
                value={values.role}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.role && touched.role && "error"}
        >
        {errors.role && touched.role && (
          <div className="input-feedback">{errors.role}</div>
        )}
                <option value="Select current role" disabled selected value>
                  Select current role
            </option>
                <option value="student">
                  Student
            </option>
                <option value="job">
                  Full Time Job
            </option>
                <option value="learner">
                  Full Time Learner
            </option>
                <option value="prefer">
                  Prefer not to say
            </option>
                <option value="others">
                  Others
            </option>
              </select>
              <br />
              <label for="recommend">
                Would you recommend freeCodeCamp to a friend?
          </label>
              <br />
              <input type="radio"
                name="recommend"
                value="Definitely"
              />
              <span class="radio-input">
                Definitely
          </span>
              <br />
              <input type="radio"
                name="recommend"
                value="Maybe" />
              <span class="radio-input">
                Maybe
          </span>
              <br />
              <input type="radio"
                name="recommend"
                value="Not sure" />
              <span class="radio-input">
                Not sure
          </span>
              <br />
              <br />
              <label for="favorite-feature">
                What is your favorite feature of freeCodeCamp?
          </label>
              <br />
              <select class="favorite-feature"
                name="favorite-feature"
                id="favorite-feature"
                required>
                <option disabled selected value>
                  Select an option
            </option>
                <option value="student">
                  Chellenges
            </option>
                <option value="job">
                  Projects
            </option>
                <option value="learner">
                  Community
            </option>
                <option value="prefer">
                  Open Source
            </option>
              </select>
              <br />
              <label for="like">
                What would you like to see improved? (Check all that apply)
          </label>
              <br />
              <input type="checkbox"
                name="like"
                value="Front-end Projects" />
              <span class="chackbox-input">
                Front-end Projects
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Back-end Projects" />
              <span class="chackbox-input">
                Back-end Projects
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Data Visualization" />
              <span class="chackbox-input">
                Data Visualization
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Challenges"
              />
              <span class="chackbox-input">
                Challenges
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Open Source Community"
              />
              <span class="chackbox-input">
                Open Source Community
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Gitter help rooms"
              />
              <span class="chackbox-input">
                Gitter help rooms
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Videos" />
              <span class="chackbox-input">
                Videos
           </span>
              <br />
              <input type="checkbox"
                name="like"
                value="City Meetups" />
              <span class="chackbox-input">
                City Meetups
           </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Wiki" />
              <span class="chackbox-input">
                Wiki
           </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Forum" />
              <span class="chackbox-input">
                Forum
          </span>
              <br />
              <input type="checkbox"
                name="like"
                value="Additional Courses"
              />
              <span class="chackbox-input">
                Additional Courses
          </span>
              <br />
              <br />
              <label for="message">
                Any comments or suggestions?
          </label>
              <br />
              <textarea name="message"
                rows="8"
                cols="80"
                placeholder="Enter your comment here...">
              </textarea>
              <br />
              <input type="submit"
                name="submit"
                value="Submit"
                disabled={isSubmitting}
              />

            </form>





          </div>

        </div>


      );
    }}
  </Formik>
);







export default Main;