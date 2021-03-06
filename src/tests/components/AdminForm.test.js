import React from "react";
import { AdminForm } from "../../pages/AdminForm";
import { Form } from "semantic-ui-react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

import jest from "jest-mock";

configure({ adapter: new Adapter() });

describe("<AdminForm />", () => {
  describe("onSubmit()", () => {
    test("handleClick works properly", () => {
      const mockExistingCohorts = [];
      const mockpostFormDetailsThunk = jest.fn();
      const wrapper = shallow(
        <AdminForm
          existingCohorts={mockExistingCohorts}
          setCohortType={jest.fn()}
          setDuplicate={jest.fn()}
          cohortName={""}
          cohortType={""}
          dateOpen={new Date()}
          dateClose={new Date()}
          dateOfResponse={new Date()}
          postFormDetailsThunk={mockpostFormDetailsThunk}
        />
      );
      console.log(wrapper.debug());
      console.log(wrapper.find(Form));
      wrapper.find(Form).simulate("submit", { preventDefault() {} });
      expect(mockpostFormDetailsThunk).toHaveBeenCalled();
    });
    test("handleClick works properly", () => {
      const mocksetDuplicate = jest.fn();
      const mockExistingCohorts = [{ cohortName: "test", cohortType: "test" }];
      const mockpostFormDetailsThunk = jest.fn();
      const wrapper = shallow(
        <AdminForm
          existingCohorts={mockExistingCohorts}
          setCohortType={jest.fn()}
          setCohortName={jest.fn()}
          setDuplicate={mocksetDuplicate}
          cohortName={"test"}
          cohortType={"test"}
          dateOpen={new Date()}
          dateClose={new Date()}
          dateOfResponse={new Date()}
          postFormDetailsThunk={mockpostFormDetailsThunk}
        />
      );
      console.log(wrapper.debug());
      console.log(wrapper.find(Form));
      wrapper.find(Form).simulate("submit", { preventDefault() {} });
      expect(mockpostFormDetailsThunk).not.toHaveBeenCalled();
    });
  });
});
